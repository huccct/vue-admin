/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2024-03-21
 */

// 模拟商品数据
const productList = [
  {
    id: 1,
    spuName: 'iPhone 15 Pro',
    description: 'Apple最新旗舰手机',
    category3Id: 1,
    tmId: 1,
    tmName: 'Apple',
    spuImageList: [
      {
        id: 1,
        imgName: 'iPhone 15 Pro',
        imgUrl: 'https://example.com/iphone-1.jpg',
        spuId: 1,
        createTime: '2024-03-21',
        updateTime: '2024-03-21',
      },
      {
        id: 2,
        imgName: 'iPhone 15 Pro',
        imgUrl: 'https://example.com/iphone-2.jpg',
        spuId: 1,
        createTime: '2024-03-21',
        updateTime: '2024-03-21',
      },
    ],
    spuSaleAttrList: [
      {
        id: 1,
        baseSaleAttrId: 1,
        saleAttrName: '颜色',
        spuId: 1,
        createTime: null,
        updateTime: null,
        spuSaleAttrValueList: [
          {
            id: 1,
            saleAttrValueName: '黑色',
            spuId: 1,
            baseSaleAttrId: 1,
            createTime: null,
            updateTime: null,
            isChecked: null,
            saleAttrValue: '黑色',
          },
          {
            id: 2,
            saleAttrValueName: '白色',
            spuId: 1,
            baseSaleAttrId: 1,
            createTime: null,
            updateTime: null,
            isChecked: null,
            saleAttrValue: '白色',
          },
        ],
        flag: false,
        saleAttrValue: '',
      },
      {
        id: 2,
        baseSaleAttrId: 2,
        saleAttrName: '版本',
        spuId: 1,
        createTime: null,
        updateTime: null,
        spuSaleAttrValueList: [
          {
            id: 3,
            saleAttrValueName: '128GB',
            spuId: 1,
            baseSaleAttrId: 2,
            createTime: null,
            updateTime: null,
            isChecked: null,
            saleAttrValue: '128GB',
          },
          {
            id: 4,
            saleAttrValueName: '256GB',
            spuId: 1,
            baseSaleAttrId: 2,
            createTime: null,
            updateTime: null,
            isChecked: null,
            saleAttrValue: '256GB',
          },
        ],
        flag: false,
        saleAttrValue: '',
      },
    ],
  },
]

// 模拟分类数据
const categoryList = {
  c1: [
    { id: 1, name: '手机数码' },
    { id: 2, name: '家用电器' },
  ],
  c2: {
    1: [
      { id: 1, name: '手机' },
      { id: 2, name: '平板' },
    ],
    2: [
      { id: 3, name: '电视' },
      { id: 4, name: '空调' },
    ],
  },
  c3: {
    1: [
      { id: 1, name: '苹果' },
      { id: 2, name: '华为' },
    ],
    2: [
      { id: 3, name: 'iPad' },
      { id: 4, name: '华为平板' },
    ],
  },
}

// 模拟品牌数据
const trademarkList = [
  {
    id: 1,
    tmName: 'Apple',
    logoUrl: 'https://example.com/apple-logo.png',
  },
  {
    id: 2,
    tmName: 'Huawei',
    logoUrl: 'https://example.com/huawei-logo.png',
  },
]

// 模拟属性数据
const attrList = [
  {
    id: 1,
    attrName: '颜色',
    categoryId: 1,
    categoryLevel: 3,
    attrValueList: [
      {
        id: 1,
        valueName: '黑色',
        attrId: 1,
      },
      {
        id: 2,
        valueName: '白色',
        attrId: 1,
      },
      {
        id: 3,
        valueName: '金色',
        attrId: 1,
      },
    ],
  },
  {
    id: 2,
    attrName: '版本',
    categoryId: 1,
    categoryLevel: 3,
    attrValueList: [
      {
        id: 4,
        valueName: '128GB',
        attrId: 2,
      },
      {
        id: 5,
        valueName: '256GB',
        attrId: 2,
      },
      {
        id: 6,
        valueName: '512GB',
        attrId: 2,
      },
    ],
  },
]

// 模拟SKU数据
const skuList = [
  {
    id: 1,
    spuId: 1,
    price: 8999,
    stock: 100,
    skuName: 'iPhone 15 Pro 256GB 深空黑',
    skuDesc: 'iPhone 15 Pro 256GB 深空黑',
    weight: '0.2',
    isSale: 1,
    skuImageList: [
      {
        id: 1,
        imgName: 'iPhone 15 Pro 256GB 深空黑',
        imgUrl: 'https://example.com/iphone-1.jpg',
        skuId: 1,
        spuImgId: 1,
      },
    ],
    skuAttrValueList: [
      {
        id: 1,
        attrId: 1,
        valueId: 1,
        skuId: 1,
        attrName: '颜色',
        valueName: '黑色',
      },
      {
        id: 2,
        attrId: 2,
        valueId: 1,
        skuId: 1,
        attrName: '版本',
        valueName: '256GB',
      },
    ],
  },
]

export default [
  // 获取一级分类
  {
    url: '/admin/product/getCategory1',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: categoryList.c1,
      }
    },
  },
  // 获取二级分类
  {
    url: '/admin/product/getCategory2/:category1Id',
    method: 'get',
    response: (request) => {
      const category1Id = Number(request.url.split('/').pop())
      return {
        code: 200,
        data: categoryList.c2[category1Id] || [],
      }
    },
  },
  // 获取三级分类
  {
    url: '/admin/product/getCategory3/:category2Id',
    method: 'get',
    response: (request) => {
      const category2Id = Number(request.url.split('/').pop())
      return {
        code: 200,
        data: categoryList.c3[category2Id] || [],
      }
    },
  },
  // 获取属性列表
  {
    url: '/admin/product/attrInfoList/:category1Id/:category2Id/:category3Id',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: attrList,
      }
    },
  },
  // 添加/更新属性
  {
    url: '/admin/product/saveAttrInfo',
    method: 'post',
    response: ({ body }) => {
      if (body.id) {
        const index = attrList.findIndex((item) => item.id === body.id)
        if (index !== -1) {
          attrList[index] = { ...attrList[index], ...body }
        }
      } else {
        attrList.push({
          ...body,
          id: Date.now(),
        })
      }
      return {
        code: 200,
        data: null,
        message: '保存成功',
      }
    },
  },
  // 删除属性
  {
    url: '/admin/product/deleteAttr/:attrId',
    method: 'delete',
    response: (request) => {
      const attrId = Number(request.url.split('/').pop())
      const index = attrList.findIndex((item) => item.id === attrId)
      if (index !== -1) {
        attrList.splice(index, 1)
      }
      return {
        code: 200,
        data: null,
        message: '删除成功',
      }
    },
  },
  // 获取SPU列表
  {
    url: '/admin/product/:page/:limit',
    method: 'get',
    response: ({ query, params }) => {
      const { category3Id } = query
      const page = Number(params?.page) || 1
      const limit = Number(params?.limit) || 10
      const filteredList = productList.filter(
        (item) => item.category3Id === Number(category3Id),
      )
      const start = (page - 1) * limit
      const end = start + limit
      const records = filteredList.slice(start, end)
      return {
        code: 200,
        data: {
          records,
          total: filteredList.length,
          size: limit,
          current: page,
          searchCount: true,
          pages: Math.ceil(filteredList.length / limit),
        },
        message: '获取成功',
        ok: true,
      }
    },
  },
  // 获取品牌列表
  {
    url: '/admin/product/baseTrademark/getTrademarkList',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: trademarkList,
      }
    },
  },
  // 获取SPU图片列表
  {
    url: '/admin/product/spuImageList/:spuId',
    method: 'get',
    response: (request) => {
      const spuId = Number(request.url.split('/').pop())
      const product = productList.find((item) => item.id === spuId)
      const imageList = product?.spuImageList || []
      return {
        code: 200,
        data: imageList,
        message: '获取成功',
        ok: true,
      }
    },
  },
  // 获取SPU销售属性
  {
    url: '/admin/product/spuSaleAttrList/:spuId',
    method: 'get',
    response: (request) => {
      const spuId = Number(request.url.split('/').pop())
      const product = productList.find((item) => item.id === spuId)
      const saleAttrList = product?.spuSaleAttrList || []
      return {
        code: 200,
        data: saleAttrList,
        message: '获取成功',
        ok: true,
      }
    },
  },
  // 获取所有销售属性
  {
    url: '/admin/product/baseSaleAttrList',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: [
          { id: 1, name: '颜色' },
          { id: 2, name: '版本' },
          { id: 3, name: '尺码' },
        ],
        message: '获取成功',
        ok: true,
      }
    },
  },
  // 添加/更新SPU
  {
    url: '/admin/product/saveSpuInfo',
    method: 'post',
    response: ({ body }) => {
      if (body.id) {
        const index = productList.findIndex((item) => item.id === body.id)
        if (index !== -1) {
          productList[index] = {
            ...productList[index],
            ...body,
            spuImageList: body.spuImageList || productList[index].spuImageList,
            spuSaleAttrList:
              body.spuSaleAttrList?.map((attr) => ({
                ...attr,
                flag: false,
                saleAttrValue: '',
                spuSaleAttrValueList:
                  attr.spuSaleAttrValueList?.map((value) => ({
                    ...value,
                    saleAttrValue: value.saleAttrValueName,
                  })) || [],
              })) || productList[index].spuSaleAttrList,
          }
        }
      } else {
        const newSpu = {
          ...body,
          id: Date.now(),
          spuImageList: body.spuImageList || [],
          spuSaleAttrList:
            body.spuSaleAttrList?.map((attr) => ({
              ...attr,
              flag: false,
              saleAttrValue: '',
              spuSaleAttrValueList:
                attr.spuSaleAttrValueList?.map((value) => ({
                  ...value,
                  saleAttrValue: value.saleAttrValueName,
                })) || [],
            })) || [],
        }
        productList.push(newSpu)
      }
      return {
        code: 200,
        data: null,
        message: '保存成功',
        ok: true,
      }
    },
  },
  // 更新SPU
  {
    url: '/admin/product/updateSpuInfo',
    method: 'post',
    response: ({ body }) => {
      const index = productList.findIndex((item) => item.id === body.id)
      if (index !== -1) {
        productList[index] = {
          ...productList[index],
          ...body,
          spuImageList: body.spuImageList || productList[index].spuImageList,
          spuSaleAttrList:
            body.spuSaleAttrList?.map((attr) => ({
              ...attr,
              flag: false,
              saleAttrValue: '',
              spuSaleAttrValueList:
                attr.spuSaleAttrValueList?.map((value) => ({
                  ...value,
                  saleAttrValue: value.saleAttrValueName,
                })) || [],
            })) || productList[index].spuSaleAttrList,
        }
      }
      return {
        code: 200,
        data: null,
        message: '更新成功',
        ok: true,
      }
    },
  },
  // 添加SKU
  {
    url: '/admin/product/saveSkuInfo',
    method: 'post',
    response: ({ body }) => {
      const newSku = {
        ...body,
        id: Date.now(),
        skuImageList: body.skuImageList || [],
        skuAttrValueList: body.skuAttrValueList || [],
      }
      skuList.push(newSku)
      return {
        code: 200,
        data: null,
        message: '保存成功',
        ok: true,
      }
    },
  },
  // 获取SKU列表
  {
    url: '/admin/product/list/:page/:limit',
    method: 'get',
    response: ({ params }) => {
      const page = Number(params?.page) || 1
      const limit = Number(params?.limit) || 10
      const start = (page - 1) * limit
      const end = start + limit
      const records = skuList.slice(start, end)
      return {
        code: 200,
        data: {
          records,
          total: skuList.length,
          size: limit,
          current: page,
          searchCount: true,
          pages: Math.ceil(skuList.length / limit),
        },
        message: '获取成功',
        ok: true,
      }
    },
  },
  // 上架SKU
  {
    url: '/admin/product/onSale/:skuId',
    method: 'get',
    response: (request) => {
      const skuId = Number(request.url.split('/').pop())
      const sku = skuList.find((item) => item.id === skuId)
      if (sku) {
        sku.isSale = 1
      }
      return {
        code: 200,
        data: null,
        message: '上架成功',
      }
    },
  },
  // 下架SKU
  {
    url: '/admin/product/cancelSale/:skuId',
    method: 'get',
    response: (request) => {
      const skuId = Number(request.url.split('/').pop())
      const sku = skuList.find((item) => item.id === skuId)
      if (sku) {
        sku.isSale = 0
      }
      return {
        code: 200,
        data: null,
        message: '下架成功',
      }
    },
  },
  // 获取SKU详情
  {
    url: '/admin/product/getSkuInfo/:skuId',
    method: 'get',
    response: (request) => {
      const skuId = Number(request.url.split('/').pop())
      const sku = skuList.find((item) => item.id === skuId)
      return {
        code: 200,
        data: sku,
      }
    },
  },
  // 删除SKU
  {
    url: '/admin/product/deleteSku/:skuId',
    method: 'delete',
    response: (request) => {
      const skuId = Number(request.url.split('/').pop())
      const index = skuList.findIndex((item) => item.id === skuId)
      if (index !== -1) {
        skuList.splice(index, 1)
      }
      return {
        code: 200,
        data: null,
        message: '删除成功',
      }
    },
  },
  // 删除SPU
  {
    url: '/admin/product/deleteSpu/:spuId',
    method: 'delete',
    response: (request) => {
      const spuId = Number(request.url.split('/').pop())
      const index = productList.findIndex((item) => item.id === spuId)
      if (index !== -1) {
        productList.splice(index, 1)
      }
      return {
        code: 200,
        data: null,
        message: '删除成功',
        ok: true,
      }
    },
  },
  // 获取品牌列表
  {
    url: '/admin/product/baseTrademark/:page/:limit',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          records: trademarkList,
          total: trademarkList.length,
          size: 10,
          current: 1,
          searchCount: true,
          pages: 1,
        },
        message: '获取成功',
        ok: true,
      }
    },
  },
  // 添加品牌
  {
    url: '/admin/product/baseTrademark/save',
    method: 'post',
    response: ({ body }) => {
      trademarkList.push({
        ...body,
        id: Date.now(),
      })
      return {
        code: 200,
        data: null,
        message: '添加成功',
        ok: true,
      }
    },
  },
  // 更新品牌
  {
    url: '/admin/product/baseTrademark/update',
    method: 'put',
    response: ({ body }) => {
      const index = trademarkList.findIndex((item) => item.id === body.id)
      if (index !== -1) {
        trademarkList[index] = { ...trademarkList[index], ...body }
      }
      return {
        code: 200,
        data: null,
        message: '更新成功',
        ok: true,
      }
    },
  },
  // 删除品牌
  {
    url: '/admin/product/baseTrademark/remove/:id',
    method: 'delete',
    response: (request) => {
      const id = Number(request.url.split('/').pop())
      const index = trademarkList.findIndex((item) => item.id === id)
      if (index !== -1) {
        trademarkList.splice(index, 1)
      }
      return {
        code: 200,
        data: null,
        message: '删除成功',
        ok: true,
      }
    },
  },
]
