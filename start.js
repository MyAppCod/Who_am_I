count = 0;
function submit1() {
    let ques1 = document.getElementById("answer1").value;
    let image1 = document.getElementById("img1");

    if (count < 2) {
        if (ques1 == "Candle" || ques1 == "candle" || ques1 == "A candle" || ques1 == "candles" || ques1 == "Candles" || ques1 == "CANDLE") {
            document.getElementById("result1").innerText = "You are correct";
            image1.src = "candle.jpg";
            document.getElementById("result1").style.display;
        } else {
            count = count + 1;
            document.getElementById("result1").innerText = "Try again";
        }
    } else if (count == 2) {
        if (ques1 == "Candle" || ques1 == "candle" || ques1 == "A candle" || ques1 == "candles" || ques1 == "Candles" || ques1 == "CANDLE") {
            document.getElementById("result1").innerText = "You are correct";
            image1.src = "candle.jpg";
            document.getElementById("result1").style.display;
        } else {
            count = count + 1;
            document.getElementById("result1").innerText = "Clue : Brings brightness in the dark";
        }
    } else {
        if (ques1 == "Candle" || ques1 == "candle" || ques1 == "A candle" || ques1 == "candles" || ques1 == "Candles" || ques1 == "CANDLE") {
            document.getElementById("result1").innerText = "You are correct";
            image1.src = "candle.jpg";
            document.getElementById("result1").style.display;
        } else {
            document.getElementById("result1").innerText = "The Answer is 'Candle'";
            image1.src = "candle.jpg";
            document.getElementById("result1").style.display;
        }
    }
}

count = 0;
function submit2() {
    let ques2 = document.getElementById("answer2").value;
    let image2 = document.getElementById("img2");

    if (count < 2) {
        if (ques2 == "Clock" || ques2 == "clock" || ques2 == "CLOCK") {
            document.getElementById("result2").innerText = "You are correct";
            image2.src = "clock.jpg";
            document.getElementById("result2").style.display;
        } else {
            count = count + 1;
            document.getElementById("result2").innerText = "Try again";
        }
    } else if (count == 2) {
        if (ques2 == "Clock" || ques2 == "clock" || ques2 == "CLOCK") {
            document.getElementById("result2").innerText = "You are correct";
            image2.src = "clock.jpg";
            document.getElementById("result2").style.display;
        } else {
            count = count + 1;
            document.getElementById("result2").innerText = "Clue : A 5 letter word starts with 'C'";
        }
    } else {
        if (ques2 == "Clock" || ques2 == "clock" || ques2 == "CLOCK") {
            document.getElementById("result2").innerText = "You are correct";
            image2.src = "clock.jpg";
            document.getElementById("result2").style.display;
        } else {
            document.getElementById("result2").innerText = "The Answer is 'Clock'";
            image2.src = "clock.jpg";
            document.getElementById("result2").style.display;
        }
    }
}

count = 0;
function submit3() {
    let ques3 = document.getElementById("answer3").value;
    let image3 = document.getElementById("img3");

    if (count < 2) {
        if (ques3 == "Cards" || ques3 == "cards" || ques3 == "card" || ques3 == "Card" || ques3 == "A deck of playing cards" || ques3 == "Deck of heart cards" || ques3 == "deck of heart cards" || ques3 == "CARD" || ques3 == "CARDS") {
            document.getElementById("result3").innerText = "You are correct";
            image3.src = "playingcards.jpg";
            document.getElementById("result3").style.display;
        } else {
            count = count + 1;
            document.getElementById("result3").innerText = "Try again";
        }
    } else if (count == 2) {
        if (ques3 == "Cards" || ques3 == "cards" || ques3 == "card" || ques3 == "Card" || ques3 == "A deck of playing cards" || ques3 == "Deck of heart cards" || ques3 == "deck of heart cards" || ques3 == "CARD" || ques3 == "CARDS") {
            document.getElementById("result3").innerText = "You are correct";
            image3.src = "playingcards.jpg";
            document.getElementById("result3").style.display;
        } else {
            count = count + 1;
            document.getElementById("result3").innerText = "Clue : We use it for playing";
        }
    } else {
        if (ques3 == "Cards" || ques3 == "cards" || ques3 == "card" || ques3 == "Card" || ques3 == "A deck of playing cards" || ques3 == "Deck of heart cards" || ques3 == "deck of heart cards" || ques3 == "CARD" || ques3 == "CARDS") {
            document.getElementById("result3").innerText = "You are correct";
            image3.src = "playingcards.jpg";
            document.getElementById("result3").style.display;
        } else {
            document.getElementById("result3").innerText = "The Answer is 'Cards'";
            image3.src = "playingcards.jpg";
            document.getElementById("result3").style.display;
        }
    }
}

count = 0;
function submit4() {
    let ques4 = document.getElementById("answer4").value;
    let image4 = document.getElementById("img4");

    if (count < 2) {
        if (ques4 == "day and night" || ques4 == "Day and Night" || ques4 == "Day and night" || ques4 == "DAY AND NIGHT") {
            document.getElementById("result4").innerText = "You are correct ";
            image4.src = "daynight.jpg";
            document.getElementById("result4").style.display;
        } else {
            count = count + 1;
            document.getElementById("result4").innerText = "Try again";
        }
    } else if (count == 2) {
        if (ques4 == "day and night" || ques4 == "Day and Night" || ques4 == "Day and night" || ques4 == "DAY AND NIGHT") {
            document.getElementById("result4").innerText = "You are correct ";
            image4.src = "daynight.jpg";
            document.getElementById("result4").style.display;
        } else {
            count = count + 1;
            document.getElementById("result4").innerText = "Clue : 24/7";
        }
    } else {
        if (ques4 == "day and night" || ques4 == "Day and Night" || ques4 == "Day and night" || ques4 == "DAY AND NIGHT") {
            document.getElementById("result4").innerText = "You are correct ";
            image4.src = "daynight.jpg";
            document.getElementById("result4").style.display;
        } else {
            document.getElementById("result4").innerText = "The Answer is 'Day and Night'";
            image4.src = "dayandnight.jpg";
            document.getElementById("result3").style.display;
        }
    }
}

count = 0;
function submit5() {
    let ques5 = document.getElementById("answer5").value;
    let image5 = document.getElementById("img5");

    if (count < 2) {
        if (ques5 == "echo" || ques5 == "Echo" || ques5 == "ECHO") {
            document.getElementById("result5").innerText = "You are correct ";
            image5.src = "echo.jpg";
            document.getElementById("result5").style.display;
        } else {
            count = count + 1;
            document.getElementById("result5").innerText = "Try again";
        }
    } else if (count == 2) {
        if (ques5 == "echo" || ques5 == "Echo" || ques5 == "ECHO") {
            document.getElementById("result5").innerText = "You are correct ";
            image5.src = "echo.jpg";
            document.getElementById("result5").style.display;
        } else {
            count = count + 1;
            document.getElementById("result5").innerText = "Clue : Sound waves";
        }
    } else {
        if (ques5 == "echo" || ques5 == "Echo" || ques5 == "ECHO") {
            document.getElementById("result5").innerText = "You are correct ";
            image5.src = "echo.jpg";
            document.getElementById("result5").style.display;
        } else {
            document.getElementById("result5").innerText = "The Answer is 'Echo'";
            image5.src = "echo.jpg";
            document.getElementById("result5").style.display;
        }
    }
}

count = 0;
function submit6() {
    let ques6 = document.getElementById("answer6").value;
    let image6 = document.getElementById("img6");

    if (count < 2) {
        if (ques6 == "telephone" || ques6 == "Telephone" || ques6 == "Telephone" || ques6 == "Phone" || ques6 == "phone" || ques6 == "PHONE") {
            document.getElementById("result6").innerText = "You are correct ";
            image6.src = "telephone.jpg";
            document.getElementById("result6").style.display;
        } else {
            count = count + 1;
            document.getElementById("result6").innerText = "Try again";
        }
    } else if (count == 2) {
        if (ques6 == "telephone" || ques6 == "Telephone" || ques6 == "Telephone" || ques6 == "Phone" || ques6 == "phone" || ques6 == "PHONE") {
            document.getElementById("result6").innerText = "You are correct ";
            image6.src = "telephone.jpg";
            document.getElementById("result6").style.display;
        } else {
            count = count + 1;
            document.getElementById("result6").innerText = "Clue : It has a dial";
        }
    } else {
        if (ques6 == "telephone" || ques6 == "Telephone" || ques6 == "Telephone" || ques6 == "Phone" || ques6 == "phone" || ques6 == "PHONE") {
            document.getElementById("result6").innerText = "You are correct ";
            image6.src = "telephone.jpg";
            document.getElementById("result6").style.display;
        } else {
            document.getElementById("result6").innerText = "The Answer is 'Telephone'";
            image6.src = "telephone.jpg";
            document.getElementById("result6").style.display;
        }
    }
}

count = 0;
function submit7() {
    let ques7 = document.getElementById("answer7").value;
    let image7 = document.getElementById("img7");

    if (count < 2) {
        if (ques7 == "map" || ques7 == "a map" || ques7 == "A map" || ques7 == "A Map" || ques7 == "Map" || ques7 == "A MAP" || ques7 == "MAP") {
            document.getElementById("result7").innerText = "You are correct ";
            image7.src = "map.jpg";
            document.getElementById("result7").style.display;
        } else {
            count = count + 1;
            document.getElementById("result7").innerText = "Try again";
        }
    } else if (count == 2) {
        if (ques7 == "map" || ques7 == "a map" || ques7 == "A map" || ques7 == "A Map" || ques7 == "Map" || ques7 == "A MAP" || ques7 == "MAP") {
            document.getElementById("result7").innerText = "You are correct ";
            image7.src = "map.jpg";
            document.getElementById("result7").style.display;
        } else {
            count = count + 1;
            document.getElementById("result7").innerText = "Clue : We use it to reach a destination";
        }
    } else {
        if (ques7 == "map" || ques7 == "a map" || ques7 == "A map" || ques7 == "A Map" || ques7 == "Map" || ques7 == "A MAP" || ques7 == "MAP") {
            document.getElementById("result7").innerText = "You are correct ";
            image7.src = "map.jpg";
            document.getElementById("result7").style.display;
        } else {
            document.getElementById("result7").innerText = "The Answer is 'Map'";
            image7.src = "map.jpg";
            document.getElementById("result7").style.display;
        }
    }
}

count = 0;
function submit8() {
    let ques8 = document.getElementById("answer8").value;
    let image8 = document.getElementById("img8");

    if (count < 2) {
        if (ques8 == "Live" || ques8 == "live" || ques7 == "LIVE") {
            document.getElementById("result8").innerText = "You are correct ";
            image8.src = "live.jpeg";
            document.getElementById("result8").style.display;
        } else {
            count = count + 1;
            document.getElementById("result8").innerText = "Try again";
        }
    } else if (count == 2) {

        if (ques8 == "Live" || ques8 == "live" || ques7 == "LIVE") {
            document.getElementById("result8").innerText = "You are correct ";
            image8.src = "live.jpeg";
            document.getElementById("result8").style.display;
        } else {
            count = count + 1;
            document.getElementById("result8").innerText = "Clue : A 4 letter word starts with 'L'";
        }
    } else {
        if (ques8 == "Live" || ques8 == "live" || ques7 == "LIVE") {
            document.getElementById("result8").innerText = "You are correct ";
            image8.src = "live.jpeg";
            document.getElementById("result8").style.display;
        } else {
            document.getElementById("result8").innerText = "The Answer is 'Live'";
            image8.src = "live.jpeg";
            document.getElementById("result8").style.display;
        }
    }
}


count = 0;
function submit9() {
    let ques9 = document.getElementById("answer9").value;
    let image9 = document.getElementById("img9");

    if (count < 2) {
        if (ques9 == "Breath" || ques9 == "breath" || ques9 == "BREATH") {
            document.getElementById("result9").innerText = "You are correct ";
            image9.src = "breath.jpg";
            document.getElementById("result9").style.display;
        } else {
            count = count + 1;
            document.getElementById("result9").innerText = "Try again";
        }
    } else if (count == 2) {
        if (ques9 == "Breath" || ques9 == "breath" || ques9 == "BREATH") {
            document.getElementById("result9").innerText = "You are correct ";
            image9.src = "breath.jpg";
            document.getElementById("result9").style.display;
        } else {
            count = count + 1;
            document.getElementById("result9").innerText = "Clue : We can't live without it";
        }
    } else {
        if (ques9 == "Breath" || ques9 == "breath" || ques9 == "BREATH") {
            document.getElementById("result9").innerText = "You are correct ";
            image9.src = "breath.jpg";
            document.getElementById("result9").style.display;
        } else {
            document.getElementById("result9").innerText = "The Answer is 'Breath'";
            image9.src = "breath.jpg";
            document.getElementById("result9").style.display;
        }
    }
}

count = 0;
function submit10() {
    let ques10 = document.getElementById("answer10").value;
    let image10 = document.getElementById("img10");

    if (count < 2) {
        if (ques10 == "mirror" || ques10 == "Mirror" || ques10 == "MIRROR" || ques10 == "A mirror" || ques10 == "A Mirror" || ques10 == "A MIRROR") {
            document.getElementById("result10").innerText = "You are correct ";
            image10.src = "mirror.jpg";
            document.getElementById("result10").style.display;
        } else {
            count = count + 1;
            document.getElementById("result10").innerText = "Try again";
        }
    } else if (count == 2) {
        if (ques10 == "mirror" || ques10 == "Mirror" || ques10 == "MIRROR" || ques10 == "A mirror" || ques10 == "A Mirror" || ques10 == "A MIRROR") {
            document.getElementById("result10").innerText = "You are correct ";
            image10.src = "mirror.jpg";
            document.getElementById("result10").style.display;
        } else {
            count = count + 1;
            document.getElementById("result10").innerText = "Clue : Reflection";
        }
    } else {
        if (ques10 == "mirror" || ques10 == "Mirror" || ques10 == "MIRROR" || ques10 == "A mirror" || ques10 == "A Mirror" || ques10 == "A MIRROR") {
            document.getElementById("result10").innerText = "You are correct ";
            image10.src = "mirror.jpg";
            document.getElementById("result10").style.display;
        } else {
            document.getElementById("result10").innerText = "The Answer is 'Mirror'";
            image10.src = "mirror.jpg";
            document.getElementById("result10").style.display;
        }
    }
}

count = 0;
function submit11() {
    let ques11 = document.getElementById("answer11").value;
    let image11 = document.getElementById("img11");

    if (count < 2) {
        if (ques11 == "bottle" || ques11 == "Bottle" || ques11 == "BOTTLE" || ques11 == "A bottle" || ques11 == "A Bottle" || ques11 == "A BOTTLE") {
            document.getElementById("result11").innerText = "You are correct ";
            image11.src = "bottle.jpg";
            document.getElementById("result11").style.display;
        } else {
            count = count + 1;
            document.getElementById("result11").innerText = "Try again";
        }
    } else if (count == 2) {
        if (ques11 == "bottle" || ques11 == "Bottle" || ques11 == "BOTTLE" || ques11 == "A bottle" || ques11 == "A Bottle" || ques11 == "A BOTTLE") {
            document.getElementById("result11").innerText = "You are correct ";
            image11.src = "bottle.jpg";
            document.getElementById("result11").style.display;
        } else {
            count = count + 1;
            document.getElementById("result11").innerText = "Clue : A 6 letter word with t(es) in middle";
        }
    } else {
        if (ques11 == "bottle" || ques11 == "Bottle" || ques11 == "BOTTLE" || ques11 == "A bottle" || ques11 == "A Bottle" || ques11 == "A BOTTLE") {
            document.getElementById("result11").innerText = "You are correct ";
            image11.src = "bottle.jpg";
            document.getElementById("result11").style.display;
        } else {
            document.getElementById("result11").innerText = "The Answer is 'Bottle'";
            image11.src = "bottle.jpg";
            document.getElementById("result11").style.display;
        }
    }
}

count = 0;
function submit12() {
    let ques12 = document.getElementById("answer12").value;
    let image12 = document.getElementById("img12");

    if (count < 2) {
        if (ques12 == "m" || ques11 == "M") {
            document.getElementById("result12").innerText = "You are correct ";
            image12.src = "m.png";
            document.getElementById("result12").style.display;
        } else {
            count = count + 1;
            document.getElementById("result12").innerText = "Try again";
        }
    } else if (count == 2) {
        if (ques12 == "m" || ques11 == "M") {
            document.getElementById("result12").innerText = "You are correct ";
            image12.src = "m.png";
            document.getElementById("result12").style.display;
        } else {
            count = count + 1;
            document.getElementById("result12").innerText = "Clue : An alphabet";
        }
    } else {
        if (ques12 == "m" || ques11 == "M") {
            document.getElementById("result12").innerText = "You are correct ";
            image12.src = "m.png";
            document.getElementById("result12").style.display;
        } else {
            document.getElementById("result12").innerText = "The Answer is 'M'";
            image12.src = "m.png";
            document.getElementById("result12").style.display;
        }
    }
}

count = 0;
function submit13() {
    let ques13 = document.getElementById("answer13").value;
    let image13 = document.getElementById("img13");

    if (count < 2) {
        if (ques13 == "rain" || ques11 == "Rain" || ques11 == "RAIN") {
            document.getElementById("result13").innerText = "You are correct ";
            image13.src = "rain.jpg";
            document.getElementById("result13").style.display;
        } else {
            count = count + 1;
            document.getElementById("result13").innerText = "Try again";
        }
    } else if (count == 2) {
        if (ques13 == "rain" || ques11 == "Rain" || ques11 == "RAIN") {
            document.getElementById("result13").innerText = "You are correct ";
            image13.src = "rain.jpg";
            document.getElementById("result13").style.display;
        } else {
            count = count + 1;
            document.getElementById("result13").innerText = "Clue : It falls under a season";
        }
    } else {
        if (ques13 == "rain" || ques11 == "Rain" || ques11 == "RAIN") {
            document.getElementById("result13").innerText = "You are correct ";
            image11.src = "rain.jpg";
            document.getElementById("result13").style.display;
        } else {
            document.getElementById("result13").innerText = "The Answer is 'Rain'";
            image11.src = "rain.jpg";
            document.getElementById("result13").style.display;
        }
    }
}

count = 0;
function submit14() {
    let ques14 = document.getElementById("answer14").value;
    let image14 = document.getElementById("img14");

    if (count < 2) {
        if (ques14 == "brain" || ques14 == "Brain" || ques14 == "BRAIN") {
            document.getElementById("result14").innerText = "You are correct ";
            image14.src = "brain.jpg";
            document.getElementById("result14").style.display;
        } else {
            count = count + 1;
            document.getElementById("result14").innerText = "Try again";
        }
    } else if (count == 2) {
        if (ques14 == "brain" || ques14 == "Brain" || ques14 == "BRAIN") {
            document.getElementById("result14").innerText = "You are correct ";
            image14.src = "brain.jpg";
            document.getElementById("result14").style.display;
        } else {
            count = count + 1;
            document.getElementById("result14").innerText = "Clue : An organ";
        }
    } else {
        if (ques14 == "brain" || ques14 == "Brain" || ques14 == "BRAIN") {
            document.getElementById("result14").innerText = "You are correct ";
            image14.src = "brain.jpg";
            document.getElementById("result14").style.display;
        } else {
            document.getElementById("result14").innerText = "The Answer is 'Brain'";
            image14.src = "brain.jpg";
            document.getElementById("result14").style.display;
        }
    }
}

count = 0;
function submit15() {
    let ques15 = document.getElementById("answer15").value;
    let image15 = document.getElementById("img15");

    if (count < 2) {
        if (ques15 == "pencil" || ques15 == "Pencil" || ques15 == "PENCIL") {
            document.getElementById("result15").innerText = "You are correct ";
            image15.src = "pencil.jpg";
            document.getElementById("result15").style.display;
        } else {
            count = count + 1;
            document.getElementById("result15").innerText = "Try again";
        }
    } else if (count == 2) {
        if (ques15 == "pencil" || ques15 == "Pencil" || ques15 == "PENCIL") {
            document.getElementById("result15").innerText = "You are correct ";
            image15.src = "pencil.jpg";
            document.getElementById("result15").style.display;
        } else {
            count = count + 1;
            document.getElementById("result15").innerText = "Clue : We use it to write";
        }
    } else {
        if (ques15 == "pencil" || ques15 == "Pencil" || ques15 == "PENCIL") {
            document.getElementById("result15").innerText = "You are correct ";
            image15.src = "pencil.jpg";
            document.getElementById("result15").style.display;
        } else {
            document.getElementById("result15").innerText = "The Answer is 'Pencil'";
            image15.src = "pencil.jpg";
            document.getElementById("result15").style.display;
        }
    }
}

