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
export const getProductByidCate = async (idCategory, page) => {
  try {
    const post = await AxiosInstance().get(`api/postnews/${idCategory}/${page}`);
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

// upload image to cloudiary
export const uploadImage = async (formData) => {

  try {
    const response = await AxiosInstance('multipart/form-data')
      .post('api/postnews/upload', formData);
    console.log("85 upload image resspone: ", response);
    return response.data;
  } catch (err) {
    console.log('Upload Image error:', err);
    return err;
  }
}

export const getProductById = async (id) => {
  try {
    const res = await AxiosInstance().get(`/api/postnews/get-by-id/${id}`);
    // console.log('getProductById response', res.data);
    return res.data;
  } catch (error) {
    console.log("getProductById error", error);
    throw error;
  }
};
export const searchByTitle = async (title) => {
  try {
    const res = await AxiosInstance().get(`/api/postnews/search/${title}`);
    // console.log('getProductById response', res.data);
    return res.data;
  } catch (error) {
    console.log("Search Title error", error);
    throw error;
  }
};
export const getPostNewsByUserId = async (id) => {
  try {
    const res = await AxiosInstance().get(`/api/postnews/user/${id}`);
    // console.log( `/api/postnews/user/${id}`);
    // console.log('getPostNewsByUserId response', res.data);
    return res.data;
  } catch (error) {
    console.log("getPostNewsByUserId error", error);
    throw error;
  }
};
export const getPostNewsByCategory = async (id) => {
  try {
    const res = await AxiosInstance().get(`/api/postnews/${id}/1`);
    // console.log('getPostNewsByCategory response', res.data);
    return res.data;
  } catch (error) {
    console.log("getPostNewsByCategory error", error);
    throw error;
  }
}

//lưu tin
export const savePost = async (userid, postId) => {
  try {
    const response = await AxiosInstance().post(`/api/saved/save-or-notSave?userId=${userid}&postId=${postId}`);
    console.log("85 save Post news resspone: " + JSON.stringify(response.data));
    return response.data;
  } catch (err) {
    console.log('Save error:', err);
    return err;
  }
}

// search category
export const searchByNameCategory = async (name) => {
  try {
    const res = await AxiosInstance().get(`/api/categories/search/${name}`);
    console.log('search response', res.data);
    return res.data;
  } catch (error) {
    console.log("Search Title error", error);
    throw error;
  }
};
