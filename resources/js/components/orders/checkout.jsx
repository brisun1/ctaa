import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
//import getDist from "../maps/getDist";
//import { withRouter } from "react-router";

import "../../../css/style.css";
class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shop: this.props.shop,
            menu: this.props.menu,

            delivery: [],
            deliPrice: "",
            isDeli: true,
            custPhone: "",
            custAddr: "",
            addrError: "",
            dist: "",
            cardPay: null
        };
    }
    // componentDidMount() {
    //     axios.get("/oauth/personal-access-tokens").then(response => {
    //         console.log(response.data);
    //     });
    // }

    // googleDis = () => {
    //     var origin1 = new google.maps.LatLng(55.930385, -3.118425);
    //     var origin2 = "Greenwich, England";
    //     var destinationA = "Stockholm, Sweden";
    //     var destinationB = new google.maps.LatLng(50.087692, 14.42115);

    //     var service = new google.maps.DistanceMatrixService();
    //     service.getDist(
    //         {
    //             origins: [origin1, origin2],
    //             destinations: [destinationA, destinationB],
    //             travelMode: "DRIVING",

    //             unitSystem: google.maps.UnitSystem.METRIC,
    //             avoidHighways: false,
    //             avoidTolls: false
    //         },
    //         callback
    //     );

    //      function callback(response, status) {
    //         if (status !== "OK") {
    //             alert("Error was: " + status);
    //         } else {
    //             console.log("respppppp" + response);
    //         }
    //     }
    // };
    // googleTest = () => {
    //     const origin = "10 walkinstown avenue, dublin 12";
    //     const destination = "5 dame street,dublin 2";
    //     const url =
    //         "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" +
    //         origin +
    //         "&destination=" +
    //         destination +
    //         ":&key=AIzaSyBD6bth8x9c4ekzB3kBkAV288r1ir5PIwc";
    //     axios.get(url).then(res => {
    //         console.log("googlemm" + JSON.stringify(res));
    //     });
    // };
    // handleModal = (e, i) => {
    //     const { menu } = this.state;
    //     menu[i].mainAttach = e.target.value;
    //     this.setState({
    //         menu
    //     });
    // };

    getTotal = () => {
        const { menu } = this.state;
        let total = menu.reduce((total, a) => {
            return total + a.subTotal;
        }, 0);
        if (total) return total + Number(this.state.deliPrice);
    };

    handleContinue = () => {
        const { isDeli, cardPay } = this.state;
        //submit form here
        if (cardPay) {
            this.props.handleNextStep();
        }
    };

    componentDidMount() {
        //Delivery
        axios
            .get(`api/delivery/show/${this.props.shop.id}`, { baseURL: "/" })
            .then(res => {
                let dData = res.data;
                console.log("whyresggggggdelivery" + JSON.stringify(res.data));
                this.setState({ delivery: dData });
            });
    }

    render() {
        console.log("menu render state" + this.state.menu);
        const { menu } = this.state;
        const { deliPrice } = this.props;
        const cats = [];

        menu.forEach(el => {
            cats[el.catNum] = el.cat;
        });

        if (menu.length == 0) {
            return (
                <div>
                    <div>pls up ur menu</div>
                </div>
            );
        } else
            return (
                <div className="menu">
                    <h4 className="text-center">Checkout Page</h4>
                    <hr />
                    <label>The food you have ordered is as below:</label>
                    {/* <button
                        onClick={
                            this.getDist
                            // this.state.shop.addr,
                            // this.state.custAddr
                        } */}
                    {/* >
                        googl
                    </button> */}
                    <p>distance=========={this.state.dist}</p>
                    {/* <button
                        onClick={e =>
                            GetDist(this.state.shop.addr, this.state.custAddr)
                        }
                    >
                        googl compnent
                    </button>
                    <GetDist
                        addresses={[this.state.shop.addr, this.state.custAddr]}
                    /> */}
                    {/* {this.state.modalOpen ? (
                        <div>
                            <Modal
                                //modalChecked={this.state.modalChecked}
                                frPrice={this.state.frice}
                                handleModalRadio={e => this.handleModalRadio(e)}
                                closeModal={this.handleCloseModal}
                                confirmSelect={modalChecked =>
                                    this.handleConfirmSelect(
                                        modalChecked,
                                        this.state.modalOpen
                                    )
                                }
                            />
                        </div>
                    ) : null} */}
                    <h6 className="text-center">Menu</h6>

                    <table className="table table-bordeed">
                        <thead>
                            <tr className="">
                                <td></td>
                                <td>Name</td>
                                <td>Rate</td>
                                <td>Note</td>
                                <td>Qty</td>
                                <td>Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            {cats.map((cat, ci) => {
                                return (
                                    <Fragment key={"divk" + ci}>
                                        <tr className="">
                                            <td></td>
                                            <td></td>
                                            <td
                                                key={"c" + ci}
                                                id={"cat" + ci}
                                                name="cat"
                                                className=""
                                            >
                                                {cat}
                                            </td>
                                            <td></td>
                                        </tr>

                                        {this.state.menu.map((food, index) => {
                                            //where catnum==1

                                            if (food.catNum === ci) {
                                                return (
                                                    <tr
                                                        key={
                                                            "key" +
                                                            ci +
                                                            "-" +
                                                            index
                                                        }
                                                        id={
                                                            "row" +
                                                            ci +
                                                            "--" +
                                                            index
                                                        }
                                                        className=""
                                                    >
                                                        <td
                                                            key={
                                                                "fid" +
                                                                ci +
                                                                "" +
                                                                index
                                                            }
                                                            id={
                                                                "fid" +
                                                                ci +
                                                                "0" +
                                                                index
                                                            }
                                                            name="fid"
                                                        >
                                                            {food.fid}
                                                        </td>
                                                        <td
                                                            key={
                                                                "fn" +
                                                                ci +
                                                                "" +
                                                                index
                                                            }
                                                            id={
                                                                "fn" +
                                                                ci +
                                                                "0" +
                                                                index
                                                            }
                                                            name="fname"
                                                            className=""
                                                        >
                                                            {food.fname}

                                                            {food.isMain ? (
                                                                <span className="ml-2 text-danger font-italic">
                                                                    {
                                                                        food.mainAttach
                                                                    }
                                                                </span>
                                                            ) : null}
                                                        </td>
                                                        <td
                                                            key={
                                                                "price" +
                                                                ci +
                                                                "" +
                                                                index
                                                            }
                                                            id={
                                                                "price" +
                                                                ci +
                                                                "0" +
                                                                index
                                                            }
                                                            name="price"
                                                            className=""
                                                        >
                                                            {food.price}
                                                        </td>
                                                        <td
                                                            key={
                                                                "note" +
                                                                ci +
                                                                "" +
                                                                index
                                                            }
                                                            id={
                                                                "note" +
                                                                ci +
                                                                "0" +
                                                                index
                                                            }
                                                            name="note"
                                                            className=""
                                                        >
                                                            {food.note}
                                                        </td>
                                                        <td
                                                            key={
                                                                "qty" +
                                                                ci +
                                                                "" +
                                                                index
                                                            }
                                                            id={
                                                                "qty" +
                                                                ci +
                                                                "0" +
                                                                index
                                                            }
                                                            name="qty"
                                                            className=""
                                                        >
                                                            {food.orderQty}
                                                        </td>
                                                        <td
                                                            key={
                                                                "subtot" +
                                                                ci +
                                                                +index
                                                            }
                                                            id={
                                                                "subtot" +
                                                                ci +
                                                                "0" +
                                                                index
                                                            }
                                                            name="subTotal"
                                                            className=""
                                                        >
                                                            {Math.round(
                                                                food.subTotal *
                                                                    100
                                                            ) / 100}
                                                        </td>
                                                    </tr>
                                                );
                                            }
                                        })}
                                    </Fragment>
                                );
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td>Sum:</td>
                                <td></td>
                                <td></td>

                                <td>
                                    {menu.reduce((sum, a) => {
                                        return sum + a.subTotal;
                                    }, 0)}
                                </td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                    <div>
                        <label className="text-danger">
                            Please provide the folloeing infomation to proceed.
                        </label>
                        <br />
                        <label>
                            Delivery
                            <input
                                type="checkbox"
                                id="deli"
                                name="deli"
                                className="ml-2"
                                //value={this.getDeliPrice}
                                value={true}
                                checked={this.props.isDeli == true}
                                onChange={this.props.handleDeliCheck}
                            />
                        </label>

                        <label className="ml-3">
                            Collection
                            <input
                                type="checkbox"
                                id="colle"
                                name="deli"
                                className="ml-2"
                                value={false}
                                checked={this.props.isDeli == false}
                                onChange={this.props.handleDeliCheck}
                            />
                        </label>

                        <br />
                        {deliPrice == "max" ? (
                            <div className="text-warning float-right">
                                The delivery address might be too far to serve.
                                Please contact the shop.
                            </div>
                        ) : (
                            deliPrice > 0 && (
                                <div className="float-right">
                                    Delivery Price: {deliPrice}
                                </div>
                            )
                        )}

                        <label>
                            Your contact number:
                            <input
                                type="text"
                                name="custph"
                                className="ml-2"
                                value={this.props.custPhone}
                                onChange={this.props.handlePhone}
                            />
                        </label>
                        <br />
                        {this.props.isDeli ? (
                            <label>
                                Your delivery address:
                                <input
                                    type="text"
                                    className="ml-2"
                                    value={this.props.custAddr}
                                    onChange={this.props.handleCustAddr}
                                />
                            </label>
                        ) : (
                            <div> {""}</div>
                        )}
                        {this.props.addrError == "NOT_FOUND" && (
                            <div className="text-danger float-right">
                                <div>
                                    We didn't find your address on google map .
                                    Make sure the food is deliverable !
                                </div>
                                <div>And the delivery price may vary.</div>
                            </div>
                        )}
                        <br />
                        <br />

                        <div className="d-flex ">
                            <div>Total to pay</div>

                            <div className="ml-auto">
                                {this.props.getTotal().toFixed(2)}
                            </div>
                        </div>
                        <br />
                        <br />
                        <label>
                            Card pay
                            <input
                                type="checkbox"
                                id="card"
                                name="payMethod"
                                className="ml-2"
                                value={true}
                                checked={this.props.cardPay == true}
                                onChange={this.props.handlePayMethod}
                            />
                        </label>
                        <label className="ml-4">
                            Cash pay
                            <input
                                type="checkbox"
                                id="cash"
                                name="payMethod"
                                className="ml-2"
                                value={false}
                                checked={this.props.cardPay == false}
                                onChange={this.props.handlePayMethod}
                            />
                        </label>
                        <hr />
                        <button
                            onClick={this.props.handlePrevStep}
                            className="btn btn-secondary"
                        >
                            {"< "}Back
                        </button>
                        <button
                            onClick={this.handleContinue}
                            className="btn btn-primary float-right"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            );
    }
}

export default Checkout;
