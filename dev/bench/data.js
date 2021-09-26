window.BENCHMARK_DATA = {
  "lastUpdate": 1632629578380,
  "repoUrl": "https://github.com/nautechsystems/nautilus_trader",
  "entries": {
    "Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "distinct": true,
          "id": "f063d1886500284437f96d6c55ef0db38c8af2f4",
          "message": "Update workflows standardize naming",
          "timestamp": "2021-09-26T12:56:04+10:00",
          "tree_id": "ab2cee3531a20db72a0df16d92bbe7f22cada134",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/f063d1886500284437f96d6c55ef0db38c8af2f4"
        },
        "date": 1632629150739,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.4254747712245606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 412.2904149999158 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.907301002392999,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.46540199966694 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.7065962198303215,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 585.9616870002355 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6499808.775673639,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.85067999886815 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 5621689.1062765485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 177.88247999760642 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6988277.932576017,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.09676999801013 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 7130185.783964998,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.2488000030644 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 185.7578008039085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.383354000059626 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 10264921.191918723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.41916000166384 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10617041.200417442,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.18820000064443 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 5063078.105478149,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 197.5083099978292 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 8968365.346618064,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 111.50304000238975 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2535596.7328732284,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013950078166232836",
            "extra": "mean: 394.38448040073126 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 830975.5653242646,
            "unit": "iter/sec",
            "range": "stddev: 0.000004204156262884585",
            "extra": "mean: 1.2034048192617774 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 626542.6929082463,
            "unit": "iter/sec",
            "range": "stddev: 0.000002840815475001099",
            "extra": "mean: 1.5960604302290449 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 624678.8099549634,
            "unit": "iter/sec",
            "range": "stddev: 0.000006330258449358612",
            "extra": "mean: 1.600822669288391 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3571106.787002749,
            "unit": "iter/sec",
            "range": "stddev: 8.00008641554116e-7",
            "extra": "mean: 280.0252301722139 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1142796.7108073141,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016071396286941539",
            "extra": "mean: 875.0462707348561 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 2247373.2744506495,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013413883428154778",
            "extra": "mean: 444.9639102540459 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 3737972.894518521,
            "unit": "iter/sec",
            "range": "stddev: 8.750565687723438e-7",
            "extra": "mean: 267.52467934329616 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1204269.1729685434,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018662401715260705",
            "extra": "mean: 830.3791398520843 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 683881.131499882,
            "unit": "iter/sec",
            "range": "stddev: 0.000002398412679020617",
            "extra": "mean: 1.4622424189519734 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 743274.1710586364,
            "unit": "iter/sec",
            "range": "stddev: 0.000001988759173401455",
            "extra": "mean: 1.3453985607702634 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6473289.2342706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.48096999989502 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 3876981.515529095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 257.93262000206596 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 6652565.445583062,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.317949996861 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 11074740.433187783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.29556999848865 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4242042.818490954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 235.73548000058508 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4067743.3848166284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 245.83654999787538 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 72965.18699542808,
            "unit": "iter/sec",
            "range": "stddev: 0.00005960629884589364",
            "extra": "mean: 13.705166000090687 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8561.62490179022,
            "unit": "iter/sec",
            "range": "stddev: 0.00016725859601961348",
            "extra": "mean: 116.80025830037266 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.277608508525875,
            "unit": "iter/sec",
            "range": "stddev: 0.2207627251810702",
            "extra": "mean: 305.10050160009996 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 1770861.469737235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 564.6969100007482 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1618659.4398461948,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 617.7951800009396 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 5820115.70506232,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 171.81789000005665 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2169911.114154944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 460.84836999852996 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2202646.373902808,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 453.99933999760833 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 290367.7381674462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4439087700002347 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 29505.640459034443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.891824900001666 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 26963.959491782163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.086541400003625 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.0499816715714085,
            "unit": "iter/sec",
            "range": "stddev: 0.004364951092865396",
            "extra": "mean: 327.8708227399875 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 10554118.670806147,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.74974000113434 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4222093.073186648,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 236.84934999437246 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 225070.02828514815,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.443061600068177 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 123703.76392516687,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.083828399958293 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 35626.67577418623,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.068855099991197 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1889727.9133950977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 529.1767099970457 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 1041667.0898492759,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 959.9996099950658 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 86542.63871860651,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.554997800003548 usec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "committer": {
            "email": "chris@cjdsellers.io",
            "name": "cjdsellers",
            "username": "cjdsellers"
          },
          "distinct": true,
          "id": "f063d1886500284437f96d6c55ef0db38c8af2f4",
          "message": "Update workflows standardize naming",
          "timestamp": "2021-09-26T12:56:04+10:00",
          "tree_id": "ab2cee3531a20db72a0df16d92bbe7f22cada134",
          "url": "https://github.com/nautechsystems/nautilus_trader/commit/f063d1886500284437f96d6c55ef0db38c8af2f4"
        },
        "date": 1632629571184,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_perf_orderbook.py::test_orderbook_updates",
            "value": 3.053132799074076,
            "unit": "iter/sec",
            "range": "stddev: 0.0055293889405903475",
            "extra": "mean: 327.532428429995 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_append",
            "value": 11994443.214379454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 83.37193999977899 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_queues.py::TestPythonDequePerformance::test_peek",
            "value": 4144172.27222895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 241.3027100010368 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_serialization.py::TestSerializationPerformance::test_serialize_submit_order",
            "value": 218585.37925587982,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.5748713999273605 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_mean",
            "value": 114189.29415016876,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.757388400044874 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_np_std",
            "value": 32693.399702124374,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.587213600028917 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_mean",
            "value": 1600040.9098557348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 624.9840199961909 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_stats.py::TestFunctionPerformance::test_fast_std",
            "value": 999692.854366077,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.000307240001348 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_xrate_calculator.py::TestExchangeRateCalculatorPerformanceTests::test_get_xrate",
            "value": 92210.92610512169,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.84470183999656 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_empty_strategy",
            "value": 2.544157290751344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 393.05745900037437 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_for_tick_processing",
            "value": 7.402271875715734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.0936599992565 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_backtest.py::TestBacktestEnginePerformance::test_run_with_ema_cross_strategy",
            "value": 1.5967324263246372,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 626.2790079999832 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_utc_now",
            "value": 6741610.907805894,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.33250000265252 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp",
            "value": 7125023.717336312,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.35041000170168 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestLiveClockPerformance::test_unix_timestamp_ns",
            "value": 6462972.724347029,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 154.72756000235677 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_advance_time",
            "value": 9566993.108457766,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.52604999954929 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_clock.py::TestClockPerformanceTests::test_iteratively_advance_time",
            "value": 158.8420288995642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.295563000094262 msec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_none",
            "value": 11581463.95882892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.3448700056324 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_true",
            "value": 10715364.139134403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.32394000011845 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_valid_string",
            "value": 6030247.237460097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.83068000727508 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_correctness.py::TestCorrectnessConditionPerformance::test_condition_type_or_none",
            "value": 10700572.930060498,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.45294000013382 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_builtin_decimal",
            "value": 2762525.4152439316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000049860383170578085",
            "extra": "mean: 361.9876199081773 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_decimal",
            "value": 795793.2955800345,
            "unit": "iter/sec",
            "range": "stddev: 0.000025970409317680275",
            "extra": "mean: 1.2566077215706173 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price",
            "value": 718041.8270718562,
            "unit": "iter/sec",
            "range": "stddev: 0.000007258424812031816",
            "extra": "mean: 1.3926765298310784 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_make_price_from_float",
            "value": 685050.2318752855,
            "unit": "iter/sec",
            "range": "stddev: 0.000013368285987283314",
            "extra": "mean: 1.459746969594562 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_comparisons",
            "value": 3184275.3954881374,
            "unit": "iter/sec",
            "range": "stddev: 0.000019349166781247193",
            "extra": "mean: 314.04318904606043 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_comparisons",
            "value": 1179714.7067094164,
            "unit": "iter/sec",
            "range": "stddev: 0.00000959565545228809",
            "extra": "mean: 847.6625698676798 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_comparisons",
            "value": 1690910.643807835,
            "unit": "iter/sec",
            "range": "stddev: 0.00003439608813224056",
            "extra": "mean: 591.3973063343292 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_float_arithmetic",
            "value": 4195450.773776209,
            "unit": "iter/sec",
            "range": "stddev: 7.079160059147212e-7",
            "extra": "mean: 238.35341037738544 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_builtin_decimal_arithmetic",
            "value": 1156423.8854810866,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016703356306576228",
            "extra": "mean: 864.7348196063831 nsec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic",
            "value": 688501.0967964755,
            "unit": "iter/sec",
            "range": "stddev: 0.000008994570042927465",
            "extra": "mean: 1.4524305112263391 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_decimal.py::TestDecimalPerformance::test_decimal_arithmetic_with_floats",
            "value": 605003.1776677519,
            "unit": "iter/sec",
            "range": "stddev: 0.00004002758752882134",
            "extra": "mean: 1.6528838804697443 usec\nrounds: 100000"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_builtin_arithmetic",
            "value": 6589500.540098131,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.75657000327192 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_class_name",
            "value": 2885257.0490683788,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 346.58957000829105 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_instance",
            "value": 8423164.274352102,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 118.7202300025092 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_experiments.py::TestPerformanceExperiments::test_is_message_type",
            "value": 14728039.38851989,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.89770000068529 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_limit_filled",
            "value": 4149696.3107593376,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 240.9814899965568 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_fill_model.py::TestFillModelPerformance::test_is_stop_filled",
            "value": 4533681.810316226,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 220.5712799968751 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_execute_command",
            "value": 65499.73388775511,
            "unit": "iter/sec",
            "range": "stddev: 0.00006602333946092393",
            "extra": "mean: 15.267237599982764 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order",
            "value": 8246.711205156955,
            "unit": "iter/sec",
            "range": "stddev: 0.00017975288184397684",
            "extra": "mean: 121.26046070034135 usec\nrounds: 100"
          },
          {
            "name": "tests/performance_tests/test_perf_live_execution.py::TestLiveExecutionPerformance::test_submit_order_end_to_end",
            "value": 3.089357319029702,
            "unit": "iter/sec",
            "range": "stddev: 0.23651063558218355",
            "extra": "mean: 323.69191929992667 msec\nrounds: 10"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_symbol",
            "value": 2056166.1100978965,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 486.342029998923 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_make_instrument_id",
            "value": 1680056.2671092723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 595.2181599968753 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_instrument_id_to_str",
            "value": 7485848.564522742,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.58539000364544 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_no_checking",
            "value": 2206352.711647,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 453.2366900002671 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_objects.py::TestObjectPerformance::test_build_bar_with_checking",
            "value": 2384942.389598827,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 419.2973399949551 nsec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_order_id_generator",
            "value": 276239.39445162134,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.620048479997422 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_market_order_creation",
            "value": 31508.816768799777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.73714859995016 usec\nrounds: 1"
          },
          {
            "name": "tests/performance_tests/test_perf_order.py::TestOrderPerformance::test_limit_order_creation",
            "value": 27658.214160576805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.15562430004502 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}