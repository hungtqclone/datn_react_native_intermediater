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

//Danh mục Nỗi bật
export const getCategoryDetailId = async (_id) => {
    try {
        const categoryDetail = await AxiosInstance().get(`categories/${_id}`);
        console.log("16 Service categoryDetail : " + JSON.stringify(categoryDetail.data));
        return category.data;
    } catch (err) {
        console.log('categoryDetail error:', err);
        return err;
    }
}

//Tin đăng dành cho bạn
export const getProduct = async () => {
    try {
        const product = await AxiosInstance().get('products');
        // console.log("19 Service Products : " + JSON.stringify(product.data));
        return product.data;
    } catch (err) {
        console.log('Products error:', err);
        return err;
    }
}
