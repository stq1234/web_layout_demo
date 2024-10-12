let a = [
    "蜂巢布局",
    "瀑布布局",
    "弹性布局",
    "网格布局"
];
let main_divs = document.querySelectorAll('.main-div');
let active_list = [true, false, false, false];
let bees = []


let nav = new Vue({
    el: '#nav',
    data: {
        list: a,
        colors: ['red', 'skyblue', 'green', 'purple'],
        active_list: active_list
    },
    methods: {
        change_show(index) {
            // for (let i = 0; i < main_divs.length; i++) {
            //     main_divs[i].style.display = "none";
            // }
            // main_divs[index].style.display = "block";
            active_list = [false, false, false, false];
            active_list[index] = true;
            this.active_list = active_list;
            app.active_list = active_list;
        }
    }
});


let app = new Vue({
    el: '#app',
    data: {
        list: a,
        active_list: active_list,
        bee_pictures: [
            [
                "./assets/images/1.jpg",
                "./assets/images/2.jpg",
                "./assets/images/3.jpg",
                "./assets/images/4.jpg",
                "./assets/images/5.jpg",
                "./assets/images/6.jpg",
                "./assets/images/7.jpg",
                "./assets/images/8.jpg"
            ],
            [
                "./assets/images/9.jpg",
                "./assets/images/10.jpg",
                "./assets/images/11.jpg",
                "./assets/images/12.jpg",
                "./assets/images/13.jpg",
                "./assets/images/14.jpg",
                "./assets/images/15.jpg",
                "./assets/images/16.jpg",
                "./assets/images/17.jpg"
            ],
            [
                "./assets/images/18.jpg",
                "./assets/images/19.jpg",
                "./assets/images/20.jpg",
                "./assets/images/21.jpg",
                "./assets/images/22.jpg",
                "./assets/images/23.jpg",
                "./assets/images/24.jpg",
                "./assets/images/25.jpg"
            ],
            [
                "./assets/images/26.jpg",
                "./assets/images/27.jpg",
                "./assets/images/28.jpg",
                "./assets/images/29.jpg",
                "./assets/images/30.jpg",
                "./assets/images/31.jpg",
                "./assets/images/32.jpg",
                "./assets/images/33.jpg",
                "./assets/images/34.jpg"
            ],
            [
                "./assets/images/27.jpg",
                "./assets/images/30.jpg",
                "./assets/images/1.jpg",
                "./assets/images/12.jpg",
                "./assets/images/5.jpg",
                "./assets/images/32.jpg",
                "./assets/images/14.jpg",
                "./assets/images/20.jpg"
            ],
            [
                "./assets/images/19.jpg",
                "./assets/images/4.jpg",
                "./assets/images/6.jpg",
                "./assets/images/8.jpg",
                "./assets/images/15.jpg",
                "./assets/images/33.jpg",
                "./assets/images/10.jpg",
                "./assets/images/17.jpg",
                "./assets/images/25.jpg"
            ],
            [
                "./assets/images/28.jpg",
                "./assets/images/22.jpg",
                "./assets/images/31.jpg",
                "./assets/images/9.jpg",
                "./assets/images/7.jpg",
                "./assets/images/24.jpg",
                "./assets/images/26.jpg",
                "./assets/images/3.jpg"
            ],
            [
                "./assets/images/21.jpg",
                "./assets/images/11.jpg",
                "./assets/images/34.jpg",
                "./assets/images/13.jpg",
                "./assets/images/23.jpg",
                "./assets/images/18.jpg",
                "./assets/images/16.jpg",
                "./assets/images/29.jpg",
                "./assets/images/2.jpg"
            ],
            [
                "./assets/images/21.jpg",
                "./assets/images/25.jpg",
                "./assets/images/31.jpg",
                "./assets/images/12.jpg",
                "./assets/images/8.jpg",
                "./assets/images/13.jpg",
                "./assets/images/29.jpg",
                "./assets/images/33.jpg"
            ],
            [
                "./assets/images/32.jpg",
                "./assets/images/18.jpg",
                "./assets/images/27.jpg",
                "./assets/images/15.jpg",
                "./assets/images/9.jpg",
                "./assets/images/4.jpg",
                "./assets/images/17.jpg",
                "./assets/images/1.jpg",
                "./assets/images/28.jpg"
            ],
            [
                "./assets/images/3.jpg",
                "./assets/images/22.jpg",
                "./assets/images/11.jpg",
                "./assets/images/20.jpg",
                "./assets/images/26.jpg",
                "./assets/images/30.jpg",
                "./assets/images/16.jpg",
                "./assets/images/2.jpg"
            ],
            [
                "./assets/images/6.jpg",
                "./assets/images/7.jpg",
                "./assets/images/24.jpg",
                "./assets/images/10.jpg",
                "./assets/images/5.jpg",
                "./assets/images/23.jpg",
                "./assets/images/34.jpg",
                "./assets/images/19.jpg",
                "./assets/images/14.jpg"
            ]
        ],
        water_fall_pictures: [
            [
                "./assets/images/1.jpg",
                "./assets/images/2.jpg",
                "./assets/images/3.jpg",
                "./assets/images/4.jpg",
                "./assets/images/5.jpg",
                "./assets/images/6.jpg",
                "./assets/images/7.jpg",
                "./assets/images/8.jpg"
            ],
            [
                "./assets/images/9.jpg",
                "./assets/images/10.jpg",
                "./assets/images/11.jpg",
                "./assets/images/12.jpg",
                "./assets/images/13.jpg",
                "./assets/images/14.jpg",
                "./assets/images/15.jpg",
                "./assets/images/16.jpg"
            ],
            [
                "./assets/images/17.jpg",
                "./assets/images/18.jpg",
                "./assets/images/19.jpg",
                "./assets/images/20.jpg",
                "./assets/images/21.jpg",
                "./assets/images/22.jpg",
                "./assets/images/23.jpg",
                "./assets/images/24.jpg"
            ],
            [
                "./assets/images/25.jpg",
                "./assets/images/26.jpg",
                "./assets/images/27.jpg",
                "./assets/images/28.jpg",
                "./assets/images/29.jpg",
                "./assets/images/30.jpg",
                "./assets/images/31.jpg",
                "./assets/images/32.jpg"
            ]
        ]
    },
    methods: {
        calculate_effected(x, y) {
            let ret = [];
            if (y > 0)
                ret.push({
                    x: x,
                    y: y - 1
                });
            if (x % 2 == 0 && y < 7)

                ret.push({
                    x: x,
                    y: y + 1
                });
            if (x % 2 != 0 && y < 8)
                ret.push({
                    x: x,
                    y: y + 1
                });
            if (x % 2 == 0) {
                ret.push({
                    x: x + 1,
                    y: y
                });
                ret.push({
                    x: x + 1,
                    y: y + 1
                });
                if (x > 0) {
                    ret.push({
                        x: x - 1,
                        y: y + 1
                    });
                    ret.push({
                        x: x - 1,
                        y: y
                    });
                }
            }
            if (x % 2 != 0) {
                if (y > 0) {
                    ret.push({
                        x: x - 1,
                        y: y - 1
                    });
                    if (x < 11)
                        ret.push({
                            x: x + 1,
                            y: y - 1
                        });
                }
                if (y < 9) {
                    ret.push({
                        x: x - 1,
                        y: y
                    });
                    if (x < 11)
                        ret.push({
                            x: x + 1,
                            y: y
                        });
                }
            }
            ret.push({
                x: x,
                y: y
            });
            let ret1 = [];
            ret.forEach((ele) => {
                ret1.push(ele.y + Math.floor((ele.x + 1) / 2) * 8 + (Math.floor(ele.x / 2)) * 9);
                // console.log(ele);
                // console.log(ret1[ret1.length - 1]);

            });
            // console.log(x + ", " + y);
            // console.log(ret);
            // console.log(ret1);

            return ret1;
        },

        enter(x, y) {
            let aa = this.calculate_effected(x, y);
            aa.forEach((ele) => {
                bees[ele].style.transform = "scale(0.8)";
            });
            bees[aa[aa.length - 1]].style.transform = "scale(1.25)";
        },
        leave(x, y) {
            let aa = this.calculate_effected(x, y);
            aa.forEach((ele) => {
                bees[ele].style.transform = "scale(1.0)";
            })
        }
    },
    mounted() {
        bees = document.querySelectorAll('.main-div.bee .item');
        // setInterval(() => {
        //     test();
        // }, 400);
    }
});

// let indexx = 0;

// function test() {
//     if(indexx > 0) {
//         bees[indexx-1].style.transform = "scale(1.0)";
//     }
//     bees[indexx].style.transform = "scale(1.2)";
//     indexx++;
// }

let img_boxes = document.querySelectorAll('.img-box');
let heights = ['8.5%', '9.5%', '13.5%', '15%', '10.5%', '14.5%', '18%', '11.5%']

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 8; j++) {
        img_boxes[i * 8 + j].style.height = heights[(i * 2 + j) % 8];
    }
}