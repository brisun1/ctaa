import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
class MenuShow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: [],
            cats: []
        };
    }
    // componentDidMount() {
    //     axios.get("/oauth/personal-access-tokens").then(response => {
    //         console.log(response.data);
    //     });
    // }
    componentDidMount() {
        const { shop } = this.props;
        let str_tbl = shop.name + shop.area + shop.id;
        axios.get("api/menu/show/" + str_tbl).then(res => {
            let sData = res.data;
            //console.log("whyres" + JSON.stringify(res.data));
            if (sData.length != 0) {
                let menu = sData.data;
                let cats = [];
                console.log("from menu didM" + JSON.stringify(menu));
                menu.forEach(el => {
                    cats[el.catNum] = el.cat;
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
        // return (
        //     <div key="1">
        //         <div>menu detaulll</div>
        //         <div>menu detaulll2</div>
        //     </div>
        // );
        console.log("menu render state" + this.state.menu);
        if (this.state.menu.length == 0) {
            return (
                <div>
                    <div>pls up ur menu</div>
                </div>
            );
        } else
            return (
                <div>
                    <h6 className="text-center">Menu</h6>
                    <hr />

                    {this.state.cats.map((cat, ci) => {
                        return (
                            <div key={"divk" + ci}>
                                <div
                                    key={"c" + ci}
                                    id={"cat" + ci}
                                    name="cat"
                                    className="ml-2"
                                >
                                    {cat}
                                </div>

                                {this.state.menu.map((food, index) => {
                                    //where catnum==1

                                    if (food.catNum === ci) {
                                        return (
                                            <table
                                                key={"tbl" + ci + "-" + index}
                                            >
                                                <tbody
                                                    key={
                                                        "key" + ci + "-" + index
                                                    }
                                                    className="row"
                                                >
                                                    <tr>
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
                                                            className="col"
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
                                                            className="col"
                                                            placeholder="  菜   名"
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
                                                            className="col"
                                                            placeholder="  价   格"
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
                                                            className="col"
                                                            placeholder="  备   注"
                                                        >
                                                            {food.note}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        );
                                    }
                                })}
                            </div>
                        );
                    })}

                    <hr />
                </div>
            );
    }
}

export default MenuShow;
// if (document.getElementById("shopDetail")) {
//     ReactDOM.render(<ShopDetail />, document.getElementById("shopDetail"));
// }
