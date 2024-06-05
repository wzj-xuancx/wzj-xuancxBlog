    /***
     * 公用变量
     * @foundationNumber 基础倍数：移动、食物随机位置量的倍数
     * @maxGrade 最大的等级
     */

    const foundationNumber = 20;
    const maxGrade = 10;

    /***
     * 食物相关
     */
    const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
    };
    let foodSeat = {
      top: 20,
      left: 20,
    };
    const changeFoodSeat = () => {
      foodSeat.top = randomNumber(0, 20) * foundationNumber;
      foodSeat.left = randomNumber(0, 20) * foundationNumber;

      document.querySelector(".food").style.cssText =
        "left:" + foodSeat.left + "px;top:" + foodSeat.top + "px";
    };

    /***
     * 等级、分数相关
     */
    let register = {
      score: 0,
      grade: 1,
    };
    const changeScore = () => {
      register.score++;
      if (register.grade < 10) {
        register.grade = Math.ceil(register.score / 10);
      }

      document.querySelector(".grade").innerText = register.grade;
      document.querySelector(".score").innerText = register.score;
    };

    /***
     * 蛇相关
     */

    let direction = ""; //移动方向
    let snakeLength = [];
    let snakeSeat = {
      top: 0,
      left: 0,
    };
    const handleWatchEnter = (e) => {
      let previousTop = snakeSeat.top;
      let previousLeft = snakeSeat.left;
      //通过便利每个身体部分来进行移动
      snakeLength.forEach((ele, index) => {
        let temporaryTop = ele.top;
        let temporaryLeft = ele.left;
        ele.top = previousTop;
        ele.left = previousLeft;
        previousTop = temporaryTop;
        previousLeft = temporaryLeft;
        document.querySelectorAll(".snake-body>div")[index].style.cssText =
          "left:" + ele.left + "px;top:" + ele.top + "px";
      });

      switch (direction) {
        case "KeyW":
          snakeSeat.top -= 20;
          break;
        case "KeyA":
          snakeSeat.left -= 20;
          break;
        case "KeyD":
          snakeSeat.left += 20;
          break;
        case "KeyS":
          snakeSeat.top += 20;
          break;
      }

      if (snakeSeat.top == foodSeat.top && snakeSeat.left == foodSeat.left) {
        changeScore();
        changeFoodSeat();
        snakeLength.push({
          top: previousTop,
          left: previousLeft,
        });

        var div = document.createElement("div");
        div.style.left = previousLeft + "px";
        div.style.top = previousTop + "px";
        div.class = "bodyItem";

        document.querySelector(".snake-body").appendChild(div);
      }

      if (
        snakeSeat.top < 0 ||
        snakeSeat.left < 0 ||
        snakeSeat.left > 380 ||
        snakeSeat.top > 380
      ) {
        alert("撞墙身亡");
        snakeSeat.top = 0;
        snakeSeat.left = 0;
        direction = "";
        snakeLength = [];
        init();

        return;
      }

      let bodySeats = snakeLength.map((item) => JSON.stringify(item));

      if (
        bodySeats.indexOf(
          JSON.stringify({ top: snakeSeat.top, left: snakeSeat.left })
        ) != -1
      ) {
        alert("把自己撞死了");
        snakeSeat.top = 0;
        snakeSeat.left = 0;
        snakeLength = [];
        direction = "";
        init();
        return;
      }
      document.querySelector(".snake-head").style.cssText =
        "left:" + snakeSeat.left + "px;top:" + snakeSeat.top + "px";
      setTimeout(() => {
        handleWatchEnter();
      }, 400 - (register.grade - 1) * 15);
    };

    //函数节流
    const throttle = (fn, wait) => {
      var timer = null;
      return function () {
        var _this = this;
        var args = arguments;
        if (!timer) {
          timer = setTimeout(function () {
            fn.apply(_this, args);
            timer = null;
          }, wait);
        }
      };
    };

    const init = () => {
      document.querySelector(".snake-head").style.cssText =
        "left:" + 0 + "px;top:" + 0 + "px";
      document.querySelector(".snake-body").innerHTML = "";
      document.querySelector(".grade").innerText = register.grade;
      document.querySelector(".score").innerText = register.score;
      changeFoodSeat();
      handleWatchEnter();
    };

    document.addEventListener("keydown", (e) => {
      if (
        (e.code == "KeyW" && direction != "KeyS") ||
        (e.code == "KeyA" && direction != "KeyD") ||
        (e.code == "KeyD" && direction != "KeyA") ||
        (e.code == "KeyS" && direction != "KeyW")
      ) {
        direction = e.code;
      }
    });
    init();