import Mock from "mockjs";

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