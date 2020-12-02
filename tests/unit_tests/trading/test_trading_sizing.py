# -------------------------------------------------------------------------------------------------
#  Copyright (C) 2015-2020 Nautech Systems Pty Ltd. All rights reserved.
#  https://nautechsystems.io
#
#  Licensed under the GNU Lesser General Public License Version 3.0 (the "License");
#  You may not use this file except in compliance with the License.
#  You may obtain a copy of the License at https://www.gnu.org/licenses/lgpl-3.0.en.html
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
# -------------------------------------------------------------------------------------------------

from decimal import Decimal
import unittest

from nautilus_trader.backtest.loaders import InstrumentLoader
from nautilus_trader.model.currencies import USD
from nautilus_trader.model.objects import Money
from nautilus_trader.model.objects import Price
from nautilus_trader.model.objects import Quantity
from nautilus_trader.trading.sizing import FixedRiskSizer
from nautilus_trader.trading.sizing import PositionSizer
from tests.test_kit.stubs import TestStubs


USDJPY = InstrumentLoader.default_fx_ccy(TestStubs.symbol_gbpusd_fxcm())


class PositionSizerTests(unittest.TestCase):

    def test_update_instrument(self):
        # Arrange
        sizer = PositionSizer(USDJPY)

        # Act
        sizer.update_instrument(USDJPY)

        # Assert
        self.assertTrue(True)  # No exceptions raised

    def test_calculate_raises_not_implemented_exception(self):
        # Arrange
        sizer = PositionSizer(USDJPY)

        # Act
        # Assert
        self.assertRaises(
            NotImplementedError,
            sizer.calculate,
            Price("1.00100"),
            Price("1.00000"),
            Money(1000000, USD),
            Decimal("0.001"),
            Decimal(1000),
        )


class FixedRiskSizerTests(unittest.TestCase):

    def setUp(self):
        # Fixture Setup
        self.sizer = FixedRiskSizer(USDJPY)

    def test_calculate_with_zero_equity_returns_quantity_zero(self):
        # Arrange
        equity = Money(0, USD)  # No equity

        # Act
        result = self.sizer.calculate(
            entry=Price("1.00100"),
            stop_loss=Price("1.00000"),
            equity=equity,
            risk=Decimal("0.001"),  # 0.1%
            unit_batch_size=Decimal(1000),
        )

        # Assert
        self.assertEqual(Quantity(0), result)

    def test_calculate_with_zero_exchange_rate_returns_quantity_zero(self):
        # Arrange
        equity = Money(0, USD)  # No equity

        # Act
        result = self.sizer.calculate(
            entry=Price("1.00100"),
            stop_loss=Price("1.00000"),
            equity=equity,
            risk=Decimal("0.001"),  # 0.1%
            exchange_rate=Decimal("0"),
        )

        # Assert
        self.assertEqual(Quantity(0), result)

    def test_calculate_with_zero_risk_returns_quantity_zero(self):
        # Arrange
        equity = Money(0, USD)  # No equity

        # Act
        result = self.sizer.calculate(
            entry=Price("1.00100"),
            stop_loss=Price("1.00100"),
            equity=equity,
            risk=Decimal("0.001"),  # 0.1%
            exchange_rate=Decimal("0"),
        )

        # Assert
        self.assertEqual(Quantity(0), result)

    def test_calculate_single_unit_size(self):
        # Arrange
        equity = Money(1000000, USD)

        # Act
        result = self.sizer.calculate(
            entry=Price("1.00100"),
            stop_loss=Price("1.00000"),
            equity=equity,
            risk=Decimal("0.001"),  # 0.1%
            unit_batch_size=Decimal(1000),
        )

        # Assert
        self.assertEqual(Quantity(1000000), result)

    def test_calculate_single_unit_with_exchange_rate(self):
        # Arrange
        equity = Money(1000000, USD)

        # Act
        result = self.sizer.calculate(
            entry=Price("110.010"),
            stop_loss=Price("110.000"),
            equity=equity,
            risk=Decimal("0.001"),  # 1%
            exchange_rate=Decimal(str(1 / 110)),
        )

        # Assert
        self.assertEqual(Quantity(10000000), result)

    def test_calculate_single_unit_size_when_risk_too_high(self):
        # Arrange
        equity = Money(100000, USD)

        # Act
        result = self.sizer.calculate(
            entry=Price("3.00000"),
            stop_loss=Price("1.00000"),
            equity=equity,
            risk=Decimal("0.01"),  # 1%
            unit_batch_size=Decimal(1000),
        )

        # Assert
        self.assertEqual(Quantity(), result)

    def test_impose_hard_limit(self):
        # Arrange
        equity = Money(1000000, USD)

        # Act
        result = self.sizer.calculate(
            entry=Price("1.00010"),
            stop_loss=Price("1.00000"),
            equity=equity,
            risk=Decimal("0.01"),  # 1%
            hard_limit=Decimal(500000),
            unit_batch_size=Decimal(1000),
            units=1,

        )

        # Assert
        self.assertEqual(Quantity(500000), result)

    def test_calculate_multiple_unit_size(self):
        # Arrange
        equity = Money(1000000, USD)

        # Act
        result = self.sizer.calculate(
            entry=Price("1.00010"),
            stop_loss=Price("1.00000"),
            equity=equity,
            risk=Decimal("0.001"),  # 0.1%
            unit_batch_size=Decimal(1000),
            units=3,
        )

        # Assert
        self.assertEqual(Quantity(3333000), result)

    def test_calculate_multiple_unit_size_larger_batches(self):
        # Arrange
        equity = Money(1000000, USD)

        # Act
        result = self.sizer.calculate(
            entry=Price("1.00087"),
            stop_loss=Price("1.00000"),
            equity=equity,
            risk=Decimal("0.001"),  # 0.1%
            unit_batch_size=Decimal(25000),
            units=4,
        )

        # Assert
        self.assertEqual(Quantity(275000), result)

    def test_calculate_for_usdjpy_with_commission(self):
        # Arrange
        sizer = FixedRiskSizer(InstrumentLoader.default_fx_ccy(TestStubs.symbol_usdjpy_fxcm()))
        equity = Money(1000000, USD)

        # Act
        result = sizer.calculate(
            entry=Price("107.703"),
            stop_loss=Price("107.403"),
            equity=equity,
            risk=Decimal("0.01"),  # 1%
            commission_rate=Decimal("0.0002"),
            exchange_rate=Decimal(str(1 / 107.403)),
            unit_batch_size=Decimal(1000),
            units=1,
        )

        # Assert
        self.assertEqual(Quantity(3578000), result)
