import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
//import getDist from "../maps/getDist";
import { withRouter } from "react-router";
import Modal from "../others/modal";
import "../../../css/style.css";
import ExistMenu from "./existMenu";
import Checkout from "../orders/checkout";
import CardDetail from "../payment/cardDetail";
import CardMinimal from "../payment/cardMinimal";
class MenuOrder extends Component {
    constructor(props) {
        super(props);

        const shop = this.props.shops.find(
            shop => shop.id == this.props.match.params.id
        );

        this.state = {
            step: 1,
            shop: shop,
            menu: [],
            order: [],
            cats: [],
            frice: null,
            delivery: [],
            deliPrice: "",
            isDeli: true,
            custAddr: "",
            custPhone: "",
            addrError: "",
            modalOpen: false,
            //modalRadio: false,
            modalChecked: "",
            dist: "",
            CardPay: true
        };
    }
    handleNextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };
    handlePrevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };
    handleOrder = (e, i) => {
        const menu = [...this.state.menu];

        menu[i].orderQty = 1;
        menu[i].subTotal = parseFloat(menu[i].price);
        this.setState({ menu });
        if (menu[i].isMain) {
            this.setState({ modalOpen: i + 1 });
        }
    };
    handleAdd = (e, i) => {
        const menu = [...this.state.menu];

        menu[i].orderQty++;
        menu[i].subTotal = menu[i].subTotal + parseFloat(menu[i].price);
        this.setState({ menu });
        if (menu[i].isMain) {
            this.setState({ modalOpen: i + 1 });
        }
    };
    handleDelete = (e, i) => {
        const menu = [...this.state.menu];
        menu[i].orderQty = null;
        menu[i].subTotal = null;
        menu[i].mainAttach = ["", "", "", ""];
        this.setState({ menu });
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
    // handleCustAddr = e => {
    //     this.setState({ custAddr: e.target.value });
    // };
    handleCloseModal = () => {
        this.setState({ modalOpen: false });
    };
    handleConfirmSelect = (modalChecked, i) => {
        this.setState({ modalChecked });

        const menu = [...this.state.menu];

        switch (modalChecked) {
            case "chips":
                let undone = true;

                for (let j = 0; j < 3; j++) {
                    let k = 1;
                    if (menu[i - 1].mainAttach[j] == k + " chips ") {
                        menu[i - 1].mainAttach[j] = k + 1 + " chips ";
                        undone = false;
                    }
                }
                if (undone) {
                    for (let m = 0; m < 3; m++) {
                        if (menu[i - 1].mainAttach[m] == "") {
                            menu[i - 1].mainAttach[m] = "1 chips ";
                            break;
                        }
                    }
                }
                break;
            case "brice":
                let undonebr = true;

                for (let j = 0; j < 3; j++) {
                    let k = 1;
                    if (menu[i - 1].mainAttach[j] == k + " boiled rice ") {
                        menu[i - 1].mainAttach[j] = k + 1 + " boiled rice ";
                        undonebr = false;
                    }
                }
                if (undonebr) {
                    for (let m = 0; m < 3; m++) {
                        if (menu[i - 1].mainAttach[m] == "") {
                            menu[i - 1].mainAttach[m] = "1 boiled rice ";
                            break;
                        }
                    }
                }
                break;

            case "frice":
                let undonefr = true;

                for (let n = 0; n < 3; n++) {
                    let k = 1;
                    if (menu[i - 1].mainAttach[n] == k + " fried rice ") {
                        menu[i - 1].mainAttach[n] = k + 1 + " fried rice ";
                        undonefr = false;
                    }
                }
                if (undonefr) {
                    for (let m = 0; m < 3; m++) {
                        if (menu[i - 1].mainAttach[m] == "") {
                            menu[i - 1].mainAttach[m] = "1 fried rice ";
                            break;
                        }
                    }
                }

                menu[i - 1].subTotal += this.state.frice;
                break;
        }

        this.setState({ menu });
        if (modalChecked) {
            this.setState({ modalOpen: false });
        }
    };

    componentDidMount() {
        // const shop1 = this.props.shops.find(
        //     shop => shop.id == this.props.match.params.id
        // );
        // const str_tbl = this.props.match.params.id;
        //console.log("stringtabhhhh" + JSON.stringify(shop1));
        const { shop } = this.state;
        let str_tbl = shop.shopName + shop.area + shop.id;
        //dilivery price should be passed in controller
        axios.get(`api/menu/show/${str_tbl}`, { baseURL: "/" }).then(res => {
            let sData = res.data;
            //console.log("whyresgggggg" + JSON.stringify(res.data));
            if (sData.length != 0) {
                let menu = sData.data;
                let cats = [];
                if (menu) {
                    if (menu.length > 2) {
                        console.log("from menu didM" + JSON.stringify(menu));
                        const attach = menu.pop();
                        menu.forEach(el => {
                            cats[el.catNum] = el.cat;
                            el.mainAttach = ["", "", "", ""];
                            el.orderQty = null;
                            el.subTotal = null;
                        });

                        //console.log("catnnn" + JSON.stringify(cats));
                        this.setState({
                            menu: menu,
                            cats: cats,
                            frice: parseFloat(attach.price)
                        });
                    }
                }
            }
        });
        // //Delivery
        // axios
        //     .get(`api/delivery/show/${this.state.shop.id}`, { baseURL: "/" })
        //     .then(res => {
        //         let dData = res.data;
        //         console.log("whyresggggggdelivery" + JSON.stringify(res.data));
        //         this.setState({ delivery: dDate });
        //     });
    }
    handleCustAddr = e => {
        this.setState({ custAddr: e.target.value });
        setTimeout(() => {
            this.getDist();
        }, 2500);
    };
    handlePhone = e => {
        this.setState({ custPhone: e.target.value });
    };
    getDist = () => {
        const origin = this.state.shop.addr;

        const destination = this.state.custAddr;

        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
            {
                origins: [origin],
                destinations: [destination],
                travelMode: "DRIVING",
                unitSystem: google.maps.UnitSystem.METRIC,
                avoidHighways: false,
                avoidTolls: false
            },
            (response, status) => {
                if (status !== "OK") {
                    alert("Error was: " + status);
                } else {
                    // console.log("respoooppppp" + d + o);
                    // console.log(
                    //     "resppppppppppoooo" +
                    //         response.rows[0].elements[0].distance.text
                    // );
                    console.log(
                        "resppppppppppoooo" +
                            (response.rows[0].elements[0].status ===
                                "NOT_FOUND")
                    );
                    console.log("resppppppppppoooo" + JSON.stringify(response));
                    const { status } = response.rows[0].elements[0];
                    if ((status === "NOT_FOUND") | "ZERO_RESULTS") {
                        this.setState({ addrError: "NOT_FOUND" });
                        this.setState({ deliPrice: 2.5 });
                    } else if (status == "OK") {
                        this.setState({ addrError: "" });
                        const dist = response.rows[0].elements[0].distance.text;
                        if (dist) {
                            this.getDeliPrice(dist);
                        } else {
                            this.setState({ deliPrice: 2.5 });
                        }
                    }
                    //return dist;
                }
            }
        );
    };
    getDeliPrice = distkm => {
        let dist = parseFloat(distkm.slice(0, -2));

        let deliPrice;
        const deli = this.state.delivery;
        if (dist > this.state.delivery.servLimit) {
            deliPrice = "max";
        } else if (dist > 3) {
            deliPrice = deli.dist4;
        } else if (dist > 2.5) {
            deliPrice = deli.dist3;
        } else if (dist > 2) {
            deliPrice = deli.dist25;
        } else if (dist > 1.5) {
            deliPrice = deli.dist2;
        } else if (dist > 1) {
            deliPrice = deli.dist15;
        } else {
            deliPrice = deli.dist1;
        }
        this.setState({ deliPrice });
    };
    handleDeliCheck = event => {
        this.setState({
            // deliPrice: event.target.value,
            isDeli: !this.state.isDeli
        });
    };
    handlePayMethod = event => {
        this.setState({
            cardPay: !this.state.cardPay
        });
    };

    render() {
        const { menu, step } = this.state;
        const checkMenu = [];
        this.state.menu.forEach(el => {
            if (el.orderQty > 0) {
                checkMenu.push(el);
            }
        });

        switch (step) {
            case 1:
                if (menu.length == 0) {
                    return (
                        <div>
                            <div>This shop has no menu yet</div>
                        </div>
                    );
                } else
                    return (
                        <div>
                            <ExistMenu
                                handleNextStep={this.handleNextStep}
                                //shop={this.state.shop}
                                menu={menu}
                                cats={this.state.cats}
                                firce={this.state.frice}
                                modalOpen={this.state.modalOpen}
                                modalChecked={this.state.modalChecked}
                                handleOrder={this.handleOrder}
                                handleAdd={this.handleAdd}
                                handleDelete={this.handleDelete}
                                handleCloseModal={this.handleCloseModal}
                                handleConfirmSelect={modalChecked =>
                                    this.handleConfirmSelect(
                                        modalChecked,
                                        this.state.modalOpen
                                    )
                                }
                                getTotal={this.getTotal}
                                getDeliPrice={this.getDeliPrice}
                            />
                        </div>
                    );
                break;
            case 2:
                if (checkMenu) {
                    return (
                        <div>
                            <Checkout
                                handleNextStep={this.handleNextStep}
                                handlePrevStep={this.handlePrevStep}
                                shop={this.state.shop}
                                menu={checkMenu}
                                cats={this.state.cats}
                                custAddr={this.state.custAddr}
                                custPhone={this.state.custPhone}
                                addrError={this.state.addrError}
                                handleCustAddr={this.handleCustAddr}
                                handlePhone={this.handlePhone}
                                deliPrice={this.state.deliPrice}
                                //getDist={this.getDist}
                                getTotal={this.getTotal}
                                isDeli={this.state.isDeli}
                                handleDeliCheck={this.handleDeliCheck}
                                getDeliPrice={this.getDeliPrice}
                                handlePayMethod={this.handlePayMethod}
                                cardPay={this.state.cardPay}
                            />
                        </div>
                    );
                }
            case 3:
                return (
                    <div>
                        <CardMinimal />
                        <CardDetail />
                    </div>
                );
        }
    }
}

export default withRouter(MenuOrder);
