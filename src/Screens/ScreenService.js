/* eslint-disable prettier/prettier */
import AxiosInstance from '../components/helpers/Axiosintance';

//Danh mục khám phá
export const getCategory = async () => {
  try {
    const category = await AxiosInstance().get('api/categories');
    const fileterData = category.data.filter(item => item.parentId === null);
    // console.log("6 Service category : " + JSON.stringify(fileterData));
    return fileterData;
  } catch (err) {
    console.log('Category error:', err);
    return err;
  }
};

//Tin đăng dành cho bạn
export const getProduct = async () => {
  try {
    const product = await AxiosInstance().get('api/postnews');
    // console.log("19 Service Products : " + JSON.stringify(product.data));

    return product.data;
  } catch (err) {
    console.log('Products error:', err);
    return err;
  }
};

//Danh mục con
export const getDetailCategory = async id => {
  try {
    const detail = await AxiosInstance().get(`api/categories/${id}`);
    // console.log("32 Service Products : " + JSON.stringify(detail.data));
    return detail.data;
  } catch (err) {
    console.log('Products error:', err);
    return err;
  }
};

//lấy ds tin đăng đã lưu
export const getPostSaved = async id => {
  try {
    const postSaved = await AxiosInstance().get(
      `api/saved/get-all-saved?userId=${id}`,
    );

    // console.log("32 Service Products : " + JSON.stringify(postSaved.data));
    return postSaved.data;
  } catch (err) {
    console.log('Products error:', err);
    return err;
  }
};

// get hãng 
export const getBrands = async id => {
  try {
    const detail = await AxiosInstance().get(`api/brands/${id}`);
    // console.log("32 Service Products : " + JSON.stringify(detail.data));
    return detail.data;
  } catch (err) {
    console.log('Products error:', err);
    return err;
  }
};

// get Sản phẩm theo categories 
export const getProductByidCate = async idCategory => {
  try {
    const post = await AxiosInstance().get(`api/postnews/${idCategory}`);
    // console.log("32 Service Products : " + JSON.stringify(detail.data));
    return post.data;
  } catch (err) {
    console.log('Products error:', err);
    return err;
  }
};

// Add posst news
export const addPostNews = async (data) => {
  try {
    const response = await AxiosInstance().post(`api/postnews/add`, data);
    console.log("85 add Post news resspone: " + JSON.stringify(response.data));
    return response.data;
  } catch (err) {
    console.log('Add error:', err);
    return err;
  }
}

// upload image
export const uploadImage = async (form) => {

  try {
    const response = await AxiosInstance('multipart/form-data')
      .post('api/postnews/upload', form);
    return response.data;
  } catch (err) {
    console.log('Upload Image error:', err);
    return err;
  }
}
