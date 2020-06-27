import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
//import useParams from "react-router-dom";
//it is menu.js in cta
class MenuForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cats: ["", ""],
            inputs: [1, 2, 3, 4, 5],
            inpVal: {
                fid: {
                    id: null,
                    val: ["", "", "", "", ""],
                    catNum: [0, 0, 0, 1, 1]
                },

                // { id: null, inpVal: null },
                fname: {
                    id: null,
                    val: ["", "", "", "", ""],
                    catNum: [0, 0, 0, 1, 1]
                },
                price: {
                    id: null,
                    val: ["", "", "", "", ""],
                    catNum: [0, 0, 0, 1, 1]
                },
                note: {
                    id: null,
                    val: ["", "", "", "", ""],
                    catNum: [0, 0, 0, 1, 1]
                },
                cat: ["", ""]
            }
        };
    }
    addInputs = (e, ci) => {
        this.setState({ inputs: [...this.state.inputs, ci] });
        const inpVal = { ...this.state.inpVal };
        // Object.values(inpVal).forEach(function(item){
        //         //cat has no val property
        //         item.val.push("");

        // });

        inpVal.fname.catNum.push(ci);
        inpVal.fid.val.push("");
        inpVal.fname.val.push("");
        inpVal.price.val.push("");
        inpVal.note.val.push("");
        this.setState({ inpVal });
    };
    addCat = () => {
        let cats = [...this.state.cats];

        let i = cats.length + 1;

        this.setState({ cats: [...this.state.cats, i] });
        const inpVal = { ...this.state.inpVal };
        inpVal.cat.push("");
        this.setState({ inpVal });
    };
    handleChange = (e, ci, index) => {
        const inpVal = { ...this.state.inpVal };
        const { name, value } = e.target;

        inpVal[name].catNum[index] = ci;
        inpVal[name].val[index] = value;
        this.setState({ inpVal });
    };
    handleCat = (e, ci) => {
        const inpVal = { ...this.state.inpVal };
        inpVal.cat[ci] = e.target.value;
        this.setState({ inpVal });
    };
    handleSubmit = event => {
        event.preventDefault();
        //const tblName = this.props.computedParams.sref;
        console.log("srefpppppp" + this.props);
        //setErrors(validate());
        //axios.post("api/clientForm", this.state).then(response => {});

        // const o = Object.keys(this.state.inputs);
        // for (let i = 0; i <= o.length - 1; i++) {
        //     data.set(o[i], this.state.inputs[o[i]]);
        // }
        const { fid, fname, price, note, cat } = this.state.inpVal;
        const data = {
            cat: cat,
            fid: fid.val,
            fname: fname.val,
            price: price.val,
            catNum: fname.catNum,
            note: note.val
        };

        //dilivery price should be passed in controller
        //axios.get("api/menu/show/" + { str_tbl });
        //alert("sending data" + JSON.stringify(data));
        axios
            //.post("api/menu/store/?shop_id=" + this.props.shopId, data, {})
            .post("api/menu/store/" + this.props.tblString, data, {})
            // receive two parameter endpoint url ,form data
            //})
            .then(res => {
                // then print response status
                console.log("data isssssssss" + res);
                //console.log(res);
                //console.log(res.statusText);
            });
    };

    render() {
        console.log("propspppp" + JSON.stringify(this.props));
        return (
            <form onSubmit={this.handleSubmit}>
                <h5 className="text-center">Menu Register Form</h5>
                <h6 className="text-center">Menu Register Form</h6>
                <hr />

                <div className="row">
                    <div className="col-sm">Food ID No.</div>
                    <div className="col-sm">Food Name</div>
                    <div className="col-sm">Food Price</div>
                    <div className="col-sm">
                        <label>Note</label>
                        <p className="text-warning">optinal</p>
                    </div>
                </div>

                {this.state.cats.map((cat, ci) => {
                    return (
                        <div key={"divk" + ci}>
                            <Fragment>
                                <label className="text-info">
                                    Category{ci + 1}:
                                </label>
                                <input
                                    key={"c" + ci}
                                    id={"cat" + ci}
                                    name="cat"
                                    className="ml-2"
                                    value={this.state.inpVal.cat[ci]}
                                    onChange={e => this.handleCat(e, ci)}
                                />
                            </Fragment>

                            {this.state.inputs.map((input, index) => {
                                //where catnum==1

                                if (
                                    this.state.inpVal.fname.catNum[index] == ci
                                ) {
                                    return (
                                        <div
                                            key={"key" + ci + index}
                                            className="row"
                                        >
                                            <input
                                                key={"fid" + ci + "" + index}
                                                id={"fid" + ci + "0" + index}
                                                name="fid"
                                                className="col"
                                                placeholder="  编   号"
                                                value={
                                                    this.state.inpVal.fid.val[
                                                        index
                                                    ]
                                                }
                                                onChange={e =>
                                                    this.handleChange(
                                                        e,
                                                        ci,
                                                        index
                                                    )
                                                }
                                            />
                                            <input
                                                key={"fn" + ci + "" + index}
                                                id={"fn" + ci + "0" + index}
                                                name="fname"
                                                className="col"
                                                value={
                                                    this.state.inpVal.fname.val[
                                                        index
                                                    ]
                                                }
                                                placeholder="  菜   名"
                                                onChange={e =>
                                                    this.handleChange(
                                                        e,
                                                        ci,
                                                        index
                                                    )
                                                }
                                            />
                                            <input
                                                key={"price" + ci + "" + index}
                                                id={"price" + ci + "0" + index}
                                                name="price"
                                                className="col"
                                                value={
                                                    this.state.inpVal.price.val[
                                                        index
                                                    ]
                                                }
                                                placeholder="  价   格"
                                                onChange={e =>
                                                    this.handleChange(
                                                        e,
                                                        ci,
                                                        index
                                                    )
                                                }
                                            />
                                            <input
                                                key={"note" + ci + "" + index}
                                                id={"note" + ci + "0" + index}
                                                name="note"
                                                className="col"
                                                value={
                                                    this.state.inpVal.note.val[
                                                        index
                                                    ]
                                                }
                                                placeholder="  备   注"
                                                onChange={e =>
                                                    this.handleChange(
                                                        e,
                                                        ci,
                                                        index
                                                    )
                                                }
                                            />
                                        </div>
                                    );
                                }
                            })}
                            <input
                                key={"bti".ci}
                                type="button"
                                className="btn btn-secondary mt-1 ml-1"
                                value="add Input"
                                onClick={e => this.addInputs(e, ci)}
                            />
                        </div>
                    );
                })}
                <input
                    key="addC"
                    type="button"
                    className="btn btn-info mt-1 ml-1"
                    value="add cat"
                    onClick={e => this.addCat(e)}
                />
                <hr />

                <input
                    key="submitk"
                    type="submit"
                    className="btn btn-primary ml-1"
                    value="Submit"
                />
            </form>
        );
    }
}

export default MenuForm;
// if (document.getElementById("menu")) {
//     ReactDOM.render(<MenuForm />, document.getElementById("menu"));
// }
