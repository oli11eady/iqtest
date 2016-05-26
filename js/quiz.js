var answers = [];
var quiz;

var main = function(){

	$(".start").on("click", function(){

			quiz = $(".quiz");

			quiz.empty();

			quiz.append("<h1>Question 1/15</h1><h2>Click the odd one out!</h2>");

			quiz.append("<a href='#'><div class='square square1'></div></a>");
			quiz.append("<a href='#'><div class='square square2'></div></a>");		
			quiz.append("<a href='#'><div class='square square3'></div></a>");		
			quiz.append("<a href='#'><div class='square square4'></div></a>");

			$(".square").on("click", function(){

				var square = this;

				if($(square).hasClass("square4")){
					answers.push(true);	
									
				}

				else{
					answers.push(false);
				};

				quiz.empty();

				quiz.append("<h1>Question 2/15</h1><h2> <span class='green'> 11, 21, 32, 42, 53...</span> What comes next?</h2>");

				quiz.append("<a href='#'><div class='deco number1'>64</div></a>");
				quiz.append("<a href='#'><div class='deco number2'>73</div></a>");
				quiz.append("<a href='#'><div class='deco number3'>54</div></a>");
				quiz.append("<a href='#'><div class='deco number4'>63</div></a>");

				$(".deco").on("click", function(){

						var number = this;

						if($(number).hasClass("number4")){

							answers.push(true);
						}

						else{

							answers.push(false);
						}

				quiz.empty();

				quiz.append("<h1>Question 3/15</h1><h2><span class='green'> Mircosoft announced _______ launching a new product.</span> Complete the sentence. </h2>");

				quiz.append("<a href='#'> <div class='deco2 ans1'>it is</div>");
				quiz.append("<a href='#'> <div class='deco2 ans2'>they are</div>");
				quiz.append("<a href='#'> <div class='deco2 ans3'>itself is</div>");
				quiz.append("<a href='#'> <div class='deco2 ans4'>he is</div>");


					
					$(".deco2").on("click", function(){


						var ans = this;

						if($(ans).hasClass("ans1")){
							answers.push(true);
						}

						else{

							answers.push(false);
						}


						quiz.empty();

						quiz.append("<h1>Question 4/15</h1><h2>Rearranging 'RENTHOUS' gives the name of a...</h2>");

						quiz.append("<a href='#'><div class='deco3 ans1'>City</div>");
						quiz.append("<a href='#'><div class='deco3 ans2'>Country</div>");
						quiz.append("<a href='#'><div class='deco3 ans3'>Ocean</div>");
						quiz.append("<a href='#'><div class='deco3 ans4'>Mountain Range</div>");

							$(".deco3").on("click", function(){

									var ans = this;

									if($(ans).hasClass("ans3")){

										answers.push(true);

									}

									else{

										answers.push(false);
									}


									quiz.empty();

									quiz.append("<h1>Question 5/15</h1><h2>Work out what the letters '64 S on a C B' mean. <br/><br/>For example 24 H in a D = 24 hours in a day.</h2>");
									quiz.append("<div class='surrond'><input class='inputbox' type='text' name'q4answer'/><a href='#'><div class='submit'>Submit</div></a></div>");

										$(".submit").on("click", function(){

											var ans = $(".inputbox").val();

 											var reg = new RegExp("64 spaces on a chess board", "i");

											if(reg.test(ans)){

												answers.push(true);
											}

											else{

												answers.push(false);
											}

											quiz.empty();

											quiz.append("<h1>Question 6/15</h1><h2><span class='green'>1, 1, 2, 3, 5, 8, 13....</span> What comes next?</h2>");
											quiz.append("<a href='#'><div class='deco4 number1'>20</div></a>");
											quiz.append("<a href='#'><div class='deco4 number2'>21</div></a>");
											quiz.append("<a href='#'><div class='deco4 number3'>22</div></a>");
											quiz.append("<a href='#'><div class='deco4 number4'>23</div></a>");

												$(".deco4").on("click", function(){

													var ans = this;

													if($(ans).hasClass("number2")){

														answers.push(true);
													}

													else{

														answers.push(false);

													}
												



												quiz.empty();
												quiz.append("<h1>Question 7/15</h1><h2>Two men, starting at the same point, walk in opposite directions for 4 feet, turn left and walk another 3 feet. What is the distance between them?</h2>");
												quiz.append("<a href='#'><div class='deco5 number1'>3</div></a>");
												quiz.append("<a href='#'><div class='deco5 number2'>6</div></a>");
												quiz.append("<a href='#'><div class='deco5 number3'>8</div></a>");
												quiz.append("<a href='#'><div class='deco5 number4'>10</div></a>");

												$(".deco5").on("click", function(){

													var ans = this;

													if($(ans).hasClass("number4")){

														answers.push(true);
													}

													else{

														answers.push(false);
													}

													quiz.empty();


												quiz.append("<h1>Question 8/15</h1><h2>Divide 20 by 1/4 and add 20. What do you get?</h2>");
												quiz.append("<a href='#'><div class='deco6 number1'>25</div></a>");
												quiz.append("<a href='#'><div class='deco6 number2'>45</div></a>");
												quiz.append("<a href='#'><div class='deco6 number3'>80</div></a>");
												quiz.append("<a href='#'><div class='deco6 number4'>100</div></a>");

												$(".deco6").on("click", function(){

													var ans = this;

													if($(ans).hasClass("number4")){

														answers.push(true);
													}

													else{

														answers.push(false);
													}

													quiz.empty();
											
													quiz.append("<h1>Question 9/15</h1><h2>If two monkeys can eat two bananas in two minutes, how many monkeys will it take to eat 18 bananas in six minutes?</h2>");
													quiz.append("<a href='#'><div class='deco7 number1'>6</div></a>");
													quiz.append("<a href='#'><div class='deco7 number2'>8</div></a>");
													quiz.append("<a href='#'><div class='deco7 number3'>10</div></a>");
													quiz.append("<a href='#'><div class='deco7 number4'>18</div></a>");


													$(".deco7").on("click", function(){

														var ans = this;

														if($(ans).hasClass("number1")){

															answers.push(true);
														}


														else{

															answers.push(false);
														}


														quiz.empty();

														quiz.append("<h1>Question 10/15</h1><h2>Which letter comes next in this series of letters: B A C B D C E D F ?</h2>");

														quiz.append("<a href='#'><div class='deco8 number1'>A</div></a>");
														quiz.append("<a href='#'><div class='deco8 number2'>B</div></a>");
														quiz.append("<a href='#'><div class='deco8 number3'>E</div></a>");
														quiz.append("<a href='#'><div class='deco8 number4'>F</div></a>");

														$(".deco8").on("click", function(){

															var ans = this;

															if($(ans).hasClass("number3")){

																answers.push(true);

															}

															else{

																answers.push(false);
															}

															quiz.empty();

															quiz.append("<h1>Question 11/15</h1><h2>Which of the following options does not come from a tree?</h2>");

															quiz.append("<a href='#'><div class='deco9 number1'>Banana</div></a>");
															quiz.append("<a href='#'><div class='deco9 number2'>Peach</div></a>");
															quiz.append("<a href='#'><div class='deco9 number3'>Plum</div></a>");
															quiz.append("<a href='#'><div class='deco9 number4'>Walnut</div></a>");

															$(".deco9").on("click", function(){

																var ans = this;

																if($(ans).hasClass("number1")){

																	answers.push(true);
																}

																else{

																	answers.push(false);

																}

																quiz.empty();

																quiz.append("<h1>Question 12/15</h1><h2> Six bricklayers can lay 24 bricks in half an hour. How many bricks can 12 bricklayers lay in two hours?");

																quiz.append("<a href='#'><div class='deco10 number1'>48</div></a>");
																quiz.append("<a href='#'><div class='deco10 number2'>96</div></a>");
																quiz.append("<a href='#'><div class='deco10 number3'>144</div></a>");
																quiz.append("<a href='#'><div class='deco10 number4'>192</div></a>");


															$(".deco10").on("click", function(){
															
																var ans = this;	

																if($(ans).hasClass("number4")){

																	answers.push(true);

																}		

																else{

																	answers.push(false);
																}

																quiz.empty();

																quiz.append("<h1>Question 13/15</h1><h2> In a pie-eating contest, Alice was neither first nor last, but she beat Evan. Ben beat Alice. Carol beat Dan who beat Ben. Who was last? </h2>");
																
																quiz.append("<a href='#'><div class='deco11 number1'>Ben</div></a>");
																quiz.append("<a href='#'><div class='deco11 number2'>Evan</div></a>");
																quiz.append("<a href='#'><div class='deco11 number3'>Carol</div></a>");
																quiz.append("<a href='#'><div class='deco11 number4'>Dan</div></a>");

																	$(".deco11").on("click", function(){

																	var ans = this;	

																	if($(ans).hasClass("number2")){

																	answers.push(true);
																	}

																	else{

																	answers.push(false);
																	}

																quiz.empty();

																quiz.append("<h1>Question 14/15</h1><h2>What is the number that is one more than one-tenth of one-fifth of one-half of 4,000?</h2>");

																quiz.append("<div class='surrond'><input class='inputbox' type='text' name'q14answer'/><a href='#'><div class='submit2'>Submit</div></a></div>");

																	$(".submit2").on("click", function(){

																		var ans = $(".inputbox").val();

 																		var reg = new RegExp("41", "i");

																		if(reg.test(ans)){

																			answers.push(true);

																		}

																		else{

																			answers.push(false);
																		}


																		quiz.empty();

																		quiz.append("<h1>Question 15/15</h1><h2>Start with the number of lives a cat reputedly has, multiply by the number of stitches saved by a stitch in time and add 10. What is the answer?</h2>")
																		quiz.append("<div class='surrond'><input class='inputbox' type='text' name'q15answer'/><a href='#'><div class='submit3'>Submit</div></a></div>");

																		$(".submit3").on("click", function(){

																		var ans = $(".inputbox").val();

 																		var reg = new RegExp("91", "i");

																		if(reg.test(ans)){

																			answers.push(true);

																		}

																		else{

																			answers.push(false);
																		}

																		quiz.empty();

																		finish();

																		
																			});	
																	});

																	});


															});
								});




														});


													});





												




												});



												});


												

											});



										});

							});


					});



				});


				});	

						

			});




}


var finish = function(){

	var correctAnswers = 0;

	for(var i = 0; i < answers.length; i++){

		if(answers[i]){

			correctAnswers++;
		}
	}


		switch(correctAnswers){

			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
				quiz.append("<h1>You got a whole "+ correctAnswers + "/15 questions correct!</h1>")
				for(var i = 0; i < answers.length; i++){

					if(answers[i] == false){
						var questionNumber = i + 1;
						quiz.append("<h1>You got question "+ questionNumber+" wrong</h1>");
					}

				}
			break;

		}
}	

$(document).ready(main);
