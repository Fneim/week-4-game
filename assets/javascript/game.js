$(document).ready(function() {

        var jon = Math.floor(Math.random() * 12) + 1;
        var arya = Math.floor(Math.random() * 12) + 1;
        var bran = Math.floor(Math.random() * 12) + 1;
        var sansa = Math.floor(Math.random() * 12) + 1;
        var score = 0;
        var wins = 0;
        var losses = 0;
        $("#score").text(score);

        //computer will choose random number btw max and min
        var randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

        $("#randomNum").text(randomNum);

        function reset() {
            randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            score = 0;
            $("#randomNum").text(randomNum);
            $("#score").text(score);
        }


        $("#stark1").click(function() {

            score = jon + score;
            $("#score").text(score);
            match();
        })

        $("#stark2").click(function() {
            score = arya + score;
            $("#score").text(score);
            match();
        })

        $("#stark3").click(function() {
            score = bran + score;
            $("#score").text(score);
            match();
        })

        $("#stark4").click(function() {
            score = sansa + score;
            $("#score").text(score);
            match();
        })

        function match() {

            if (score === randomNum) {
                wins++;
                alert("It's a match!");
                $("#result").text("Wins: " + wins + " Losses: " + losses);
                reset();
            } else if (score > randomNum) {
                losses++
                alert("You lose...");
                $("#result").text("Wins: " + wins + " Losses: " + losses);
                reset();
            }
        }

    })