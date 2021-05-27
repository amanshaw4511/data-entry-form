const useTiming = () => {
  const getTiming = (data) => {
    data["timing"] = data.timingfrom + "-" + data.timingto;
    delete data["timingfrom"];
    delete data["timingto"];
    return data;
  };

  const inputTiming = (style, register) => (
    <div className="form-group row">
      <label className="col-4" htmlFor="timing">
        Timing
      </label>
      <input
        type="time"
        {...register("timingfrom")}
        className="form-control p-0 text-center col"
        style={style.formControl}
        id="timing"
        required
      />
      <span
        className=" p-0 col-1 text-center align-items-center d-flex justify-content-center"
        style={{ marginBottom: "5px" }}
      >
        {" to "}
      </span>
      <input
        {...register("timingto")}
        type="time"
        className="form-control p-0 text-center col"
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
