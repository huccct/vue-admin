// 封装本地存储数据与读取数据反复噶
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token)
}

export const GET_TOKEN = () => {
  localStorage.getItem('TOKEN')
}
