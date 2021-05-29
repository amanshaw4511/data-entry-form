const useTiming = () => {
  const getTiming = (data) => {
    data["timing"] = data.timingfrom + "-" + data.timingto;
    delete data["timingfrom"];
    delete data["timingto"];
    return data;
  };

  const inputTiming = (style, register) => (
    <div className="form-group row">
      <label className="col-4" htmlFor="timing1">
        Timing
      </label>
      <input
        type="time"
        {...register("timingfrom")}
        className="form-control col-3"
        style={style.formControl}
        id="timing1"
        required
      />
      <span className="col-1 pt-2 mr-2">to</span>
      <input
        {...register("timingto")}
        type="time"
        className="form-control col-3"
        style={style.formControl}
        id="timing"
        required
      />
    </div>
  );

  return {
    inputTiming,
    getTiming,
  };
};

export default useTiming;
