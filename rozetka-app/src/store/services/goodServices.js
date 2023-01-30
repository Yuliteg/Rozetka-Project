import axious from "axios";

const getGoods = async() => {
    const goods = await axious.get('/products');

    return goods.data;
}

const goodService = {
    getGoods
}

export default goodService;