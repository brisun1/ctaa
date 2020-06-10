import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
//import { useFormik } from "formik";

export default class CreateShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                shopName: "",
                addr: "",
                area: "",
                phone: "",
                ownerName: "",
                ownerMobl: "",
                cterMobl: "",
                orderMobl: "",
                // img: "",
                // img1: "",
                // img2: "",
                // img3: "",
                openHours: "",
                openAt: "",
                closeAt: "",
                promTxt1: "",
                promTxt2: ""
            },
            selectedFile: null,
            promPic: null,
            promPic2: null,
            errors: {
                shopName: "",
                addr: "",
                area: "",
                phone: "",
                ownerName: "",
                ownerMobl: "",
                cterMobl: "",
                orderMobl: "",
                // img: "",
                // img2: "",
                // img1: "",
                // img3: "",
                openHours: "",
                openAt: "",
                closeAt: ""
            }
        };
    }

    handleChange = event => {
        const { name, value } = event.target;
        var inputs = { ...this.state.inputs };
        inputs[name] = value;

        this.setState({ inputs });

        let errors = this.state.errors;

        switch (name) {
            case "shopName":
                errors.shopName =
                    value.length < 5
                        ? "Full Name must be 5 characters long!"
                        : "";
                break;
            case "addr":
                errors.addr =
                    value.length < 5
                        ? "Address must be 5 characters long!"
                        : "";
                break;
            case "area":
                errors.area =
                    value.length < 5 ? "Area must be 5 characters long!" : "";
                break;
            case "phone":
                errors.phone =
                    value.length < 5 ? "phone must be 5 characters long!" : "";
                break;
            case "ownerName":
                errors.ownerName =
                    value.length < 5
                        ? "ownerName must be 5 characters long!"
                        : "";
                break;
            case "ownerMobl":
                errors.ownerMobl =
                    value.length < 5
                        ? "ownerMobl must be 5 characters long!"
                        : "";
                break;
            case "cterMobl":
                errors.cterMobl =
                    value.length < 5
                        ? " counter Mobl must be 5 characters long!"
                        : "";
                break;
            case "orderMobl":
                errors.orderMobl =
                    value.length < 5
                        ? "orderMobl must be 5 characters long!"
                        : "";
                break;
            case "openHours":
                errors.openHours =
                    value.length < 5
                        ? "openHours must be 5 characters long!"
                        : "";
                break;
            case "openAt":
                errors.openAt =
                    value.length < 2
                        ? "Open at must be 2 characters long!"
                        : "";
                break;
            case "closeAt":
                errors.closeAt =
                    value.length < 2
                        ? "closeAt must be 2 characters long!"
                        : "";
                break;

            default:
                break;
        }

        this.setState({ errors, [name]: value }, () => {
            console.log(errors);
        });
    };
    onFileChange = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0
        });
    };

    onPromChange = event => {
        this.setState({
            promPic: event.target.files[0]
            //loaded: 0
        });
    };
    onPromChange2 = event => {
        this.setState({
            promPic2: event.target.files[0]
            //loaded: 0
        });
    };

    handleSubmit = event => {
        alert(
            "shop name was submitted22222: " +
                this.state.shopName +
                "\nand sname was " +
                this.state.phone
        );
        event.preventDefault();

        //setErrors(validate());
        //axios.post("api/clientForm", this.state).then(response => {});
        const data = new FormData();
        // for (var x = 0; x < this.state.selectedFile.length; x++) {
        //     data.append("image", this.state.selectedFile[x]);
        // }
        data.append("image", this.state.selectedFile);
        if (this.state.promPic) data.append("promPic", this.state.promPic);
        if (this.state.promPic2) data.append("promPic2", this.state.promPic2);
        //data.append("image1", this.state.selectedFiles);
        // for (let [key, value] of Object.entries(this.state.ninput)) {
        //     data.set("${key}", "${value}");
        // }
        const o = Object.keys(this.state.inputs);
        for (let i = 0; i <= o.length - 1; i++) {
            data.set(o[i], this.state.inputs[o[i]]);
        }

        // const config = {
        //     headers: {
        //         "content-type": "application/x-www-form-urlencoded"
        //     }
        // };
        console.log("dddd" + JSON.stringify(data));

        axios
            .post("api/shop/store", data, {})

            .then(res => {
                // then print response status
                console.log(res);
            });
    };

    render() {
        const { errors } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Shop Name:
                    <input
                        name="shopName"
                        type="text"
                        value={this.state.shopName}
                        onChange={this.handleChange}
                    />
                </label>
                {errors.shopName && (
                    <p className="text-danger">{errors.shopName}</p>
                )}
                <label>
                    Shop address:
                    <input
                        name="addr"
                        type="text"
                        value={this.state.addr}
                        onChange={this.handleChange}
                    />
                </label>
                {errors.addr && <p className="text-danger">{errors.addr}</p>}
                <label>
                    area:
                    <input
                        name="area"
                        type="text"
                        value={this.state.area}
                        onChange={this.handleChange}
                    />
                </label>
                {errors.area && <p className="text-danger">{errors.area}</p>}

                <label>
                    phone:
                    <input
                        name="phone"
                        type="text"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                </label>
                {errors.phone && <p className="text-danger">{errors.phone}</p>}
                <label>
                    ownerName:
                    <input
                        name="ownerName"
                        type="text"
                        value={this.state.ownerName}
                        onChange={this.handleChange}
                    />
                </label>
                {errors.ownerName && (
                    <p className="text-danger">{errors.ownerName}</p>
                )}

                <label>
                    ownerMobl:
                    <input
                        name="ownerMobl"
                        type="text"
                        value={this.state.ownerMobl}
                        onChange={this.handleChange}
                    />
                </label>
                {errors.ownerMobl && (
                    <p className="text-danger">{errors.ownerMobl}</p>
                )}

                <label>
                    cterMobl:
                    <input
                        name="cterMobl"
                        type="text"
                        value={this.state.cterMobl}
                        onChange={this.handleChange}
                    />
                </label>
                {errors.cterMobl && (
                    <p className="text-danger">{errors.cterMobl}</p>
                )}
                <label>
                    orderMobl:
                    <input
                        name="orderMobl"
                        type="text"
                        value={this.state.orderMobl}
                        onChange={this.handleChange}
                    />
                </label>
                {errors.orderMobl && (
                    <p className="text-danger">{errors.orderMobl}</p>
                )}
                <label>
                    openHours:
                    <input
                        name="openHours"
                        type="text"
                        value={this.state.openHours}
                        onChange={this.handleChange}
                    />
                </label>
                {errors.openHours && (
                    <p className="text-danger">{errors.openHours}</p>
                )}
                <label>
                    openAt:
                    <input
                        name="openAt"
                        type="time"
                        value={this.state.openAt}
                        onChange={this.handleChange}
                    />
                </label>
                {errors.openAt && (
                    <p className="text-danger">{errors.openAt}</p>
                )}
                <label>
                    closeAt:
                    <input
                        name="closeAt"
                        type="time"
                        value={this.state.closeAt}
                        onChange={this.handleChange}
                    />
                </label>
                {errors.closeAt && (
                    <p className="text-danger">{errors.closeAt}</p>
                )}

                <label>
                    promtion text 1:
                    <input
                        name="promTxt1"
                        type="text"
                        value={this.state.promTxt1}
                        onChange={this.handleChange}
                    />
                </label>
                {errors.promTxt1 && (
                    <p className="text-danger">{errors.promTxt1}</p>
                )}
                <label>
                    promtion text 2:
                    <input
                        name="promTxt2"
                        type="text"
                        value={this.state.promTxt2}
                        onChange={this.handleChange}
                    />
                </label>
                {errors.promTxt2 && (
                    <p className="text-danger">{errors.promTxt2}</p>
                )}
                <label>
                    Photos upload:
                    <input
                        type="file"
                        name="image"
                        onChange={this.onFileChange}
                    />
                </label>
                <label>
                    Promotion Photo:
                    <input
                        type="file"
                        name="promPic"
                        onChange={this.onPromChange}
                    />
                </label>
                <label>
                    Promotion Photo 2:
                    <input
                        type="file"
                        name="promPic2"
                        onChange={this.onPromChange2}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

if (document.getElementById("shopForm")) {
    ReactDOM.render(<CreateShop />, document.getElementById("shopForm"));
}
