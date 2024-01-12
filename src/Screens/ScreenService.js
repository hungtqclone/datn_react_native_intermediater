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
        const product = await AxiosInstance().get('products');
        // console.log("19 Service Products : " + JSON.stringify(product.data));
        return product.data;
    } catch (err) {
        console.log('Products error:', err);
        return err;
    }
}

// Categories details
export const getCategoryDetailId = async () => {
    try {
        const categoryDetail = await AxiosInstance().get('categories-detail');
        console.log("32 Service categoryDetail : " + JSON.stringify(categoryDetail.data));
        return categoryDetail.data;
    } catch (err) {
        console.log('categoryDetail error:', err);
        return err;
    }
}
