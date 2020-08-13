import React from "react";

export const AForm = ({ onSubmit, custPhone }) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <p className="rmodal_header ml-2 mt-2">
                    Please choose one of the fllowings with the main food:
                </p>

                <div>
                    <label className="ml-4">
                        Chips:
                        <span className=" ml-1 font-italic text-success">
                            Free
                        </span>
                        <br />
                        <input
                            type="radio"
                            id="chips"
                            name="mainAttach"
                            value="chips"
                            checked={modalChecked == "chips"}
                            onChange={handleModalRadio}
                        />
                    </label>
                    <label className="ml-3 font-weigh-bold">
                        Boiled Rice:
                        <span className="ml-1 font-italic text-success">
                            Free
                        </span>
                        <br />
                        <input
                            type="radio"
                            id="brice"
                            name="mainAttach"
                            value="brice"
                            checked={modalChecked == "brice"}
                            onChange={handleModalRadio}
                        />
                    </label>
                    <label className="ml-4">
                        Fried Rice:
                        <span className="ml-1">{props.frPrice} Euro</span>
                        <br />
                        <input
                            type="radio"
                            id="frice"
                            name="mainAttach"
                            value="frice"
                            checked={modalChecked == "frice"}
                            onChange={handleModalRadio}
                        />
                    </label>
                </div>
                <br />
                <div className="form-group justify-content-center mb-2 row">
                    <button
                        onClick={props.closeModal}
                        className="form-control btn btn--secondary"
                        type="submit"
                    >
                        Choose none
                    </button>
                    <button
                        onClick={() =>
                            props.confirmSelect(modalChecked, props.i)
                        }
                        className="form-control btn btn-primary ml-3"
                        type="submit"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </form>
    );
};
export default AForm;
