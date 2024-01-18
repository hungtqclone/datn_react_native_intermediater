import AxiosInstance from "../components/helpers/Axiosintance";

//Danh mục khám phá
export const getCategory = async () => {
    try {
        const category = await AxiosInstance().get('categories');
        // console.log("6 Service category : " + JSON.stringify(category.data));
        return category.data;
    } catch (err) {
        console.log('Category error:', err);
        return err;
    }
}

//Tin đăng dành cho bạn
export const getProduct = async () => {
    try {
        const product = await AxiosInstance().get('postnews');
        // console.log("19 Service Products : " + JSON.stringify(product.data));
        return product.data;
    } catch (err) {
        console.log('Products error:', err);
        return err;
    }
}


//Tin đăng dành cho bạn
export const getDetailCategory = async (id) => {
    try {
        const detail = await AxiosInstance().get(`types/${id}`);
        console.log("32 Service Products : " + JSON.stringify(detail.data));
        return detail.data;
    } catch (err) {
        console.log('Products error:', err);
        return err;
    }
}

