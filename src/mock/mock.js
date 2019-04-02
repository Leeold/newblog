import Mock from "mockjs";
// // 返回随机个数的对象
// Mock.mock('/api/getObject', (req, res) => {
//     return Mock.mock({
//         'brand|1-3': {
//             a: '京东',
//             b: '国美',
//             c: '苏宁',
//             d: '当当',
//             e: '天猫',
//             f: '淘宝'
//         }
//     })
// })

Mock.mock(
     "/course/url",
    {
        "user|5-10": [{
            'name': '@cname',   //中文名称
            'age|1-100': 100,   //100以内随机整数
            'birthday': '@date("yyyy-MM-dd")',  //日期
            'city': '@city(true)'   //中国城市
        }]
    }
);

export default Mock;