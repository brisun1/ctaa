import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import GetDist from "../maps/getDist";
class MenuShow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: [],
            cats: [],
            delivery: [],
            deliPrice: 2.5,
            isDeli: true,
            custAddr: ""
        };
    }
    // componentDidMount() {
    //     axios.get("/oauth/personal-access-tokens").then(response => {
    //         console.log(response.data);
    //     });
    // }
    handleOrder = (e, i) => {
        const menu = [...this.state.menu];
        menu[i].orderQty++;
        menu[i].subTotal = menu[i].subTotal + parseFloat(menu[i].price);
        this.setState({ menu });
    };
    getDeliPrice = () => {
        // const url="https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=enc:_kjwFjtsbMt%60EgnKcqLcaOzkGari%40naPxhVg%7CJjjb%40cqLcaOzkGari%40naPxhV:&key=YOUR_API_KEY"
        // axios.get(url).then(
        //const { addr } = this.props.shop;
        //get distance from google map
        //get price from deliver array
        //maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=enc:_kjwFjtsbMt%60EgnKcqLcaOzkGari%40naPxhVg%7CJjjb%40cqLcaOzkGari%40naPxhV:&key=YOUR_API_KEY
        // https:
        return 2.5;
    };
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
    googleTest = () => {
        const origin = "10 walkinstown avenue, dublin 12";
        const destination = "5 dame street,dublin 2";
        const url =
            "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" +
            origin +
            "&destination=" +
            destination +
            ":&key=AIzaSyBD6bth8x9c4ekzB3kBkAV288r1ir5PIwc";
        axios.get(url).then(res => {
            console.log("googlemm" + JSON.stringify(res));
        });
    };
    handleRadio = event => {
        this.setState({
            deliPrice: event.target.value,
            isDeli: !this.state.isDeli
        });
    };
    getTotal = () => {
        const { menu } = this.state;
        let total = menu.reduce((total, a) => {
            return total + a.subTotal;
        }, 0);
        if (total) return total + Number(this.state.deliPrice);
    };
    handleCustAddr = e => {
        this.setState({ custAddr: e.target.value });
    };
    componentDidMount() {
        const { shop } = this.props;
        let str_tbl = shop.name + shop.area + shop.id;
        //dilivery price should be passed in controller
        axios.get("api/menu/show/" + { str_tbl }).then(res => {
            let sData = res.data;
            //console.log("whyres" + JSON.stringify(res.data));
            if (sData.length != 0) {
                let menu = sData.data;
                let cats = [];
                console.log("from menu didM" + JSON.stringify(menu));
                menu.forEach(el => {
                    cats[el.catNum] = el.cat;
                    el.orderQty = null;
                    el.subTotal = null;
                });

                //console.log("catnnn" + JSON.stringify(cats));
                this.setState({
                    menu: menu,
                    cats: cats
                });
            }
        });
    }

    render() {
        console.log("menu render state" + this.state.menu);
        const { menu } = this.state;
        if (menu.length == 0) {
            return (
                <div>
                    <div>pls up ur menu</div>
                </div>
            );
        } else
            return (
                <div>
                    <button
                        onClick={e =>
                            GetDist(this.props.shop.addr, this.state.custAddr)
                        }
                    >
                        googl
                    </button>
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

                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.cats.map((cat, ci) => {
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
                                                            className=""
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
                                                        <td>
                                                            <button
                                                                key={
                                                                    "btn" +
                                                                    ci +
                                                                    +index
                                                                }
                                                                id={
                                                                    "btn" +
                                                                    ci +
                                                                    "0" +
                                                                    index
                                                                }
                                                                name="note"
                                                                className=" btn btn-primary"
                                                                onClick={e =>
                                                                    this.handleOrder(
                                                                        e,
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                order
                                                            </button>
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
                                <td>Total:</td>
                                <td></td>
                                <td></td>

                                <td></td>
                                <td>
                                    {this.getTotal()
                                        ? this.getTotal().toFixed(2)
                                        : null}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <div>
                        <label>
                            <input
                                type="radio"
                                id="deli"
                                name="deli"
                                value={this.getDeliPrice()}
                                checked={this.state.isDeli == true}
                                onChange={this.handleRadio}
                            />
                            Delivery
                        </label>
                        <label>
                            <input
                                type="radio"
                                id="colle"
                                name="deli"
                                value={""}
                                checked={this.state.isDeli == false}
                                onChange={event => this.handleRadio(event)}
                            />
                            Collection
                        </label>
                        <div>{this.state.deliPrice}</div>
                        <br />
                        Please enter your delivery address
                        <input
                            type="text"
                            value={this.state.custAddr}
                            onChange={e => this.handleCustAddr(e)}
                        />
                        <input
                            type="text"
                            value={this.state.custAddr}
                            onChange={e => this.handleCustAddr(e)}
                        />
                    </div>
                </div>
            );
    }
}

export default MenuShow;
// if (document.getElementById("shopDetail")) {
//     ReactDOM.render(<ShopDetail />, document.getElementById("shopDetail"));
// }
