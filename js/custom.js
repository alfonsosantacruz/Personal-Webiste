"use strict";

function typer() {
    var win = $(window),
        foo = $('#typer');
    // foo.typer(['<h1><span class="iq-font-purple">Machine</span> Learning</h1>', '<h1>Data <span class="iq-font-purple">Scientist</span></h1>', '<h1><span class="iq-font-purple">Problem</span> Solver</h1>']);
    foo.typer(['<p>Software Engineering</p><br/><br/><br/>', '<p>Machine Learning</p><br/><br/><br/>', '<p>Data Science</p><br/><br/><br/>', '<p>Problem Solving</p><br/><br/><br/>'])

}

$(document).ready(function() {
    typer()
});


$(window).on('load', function() {


});
