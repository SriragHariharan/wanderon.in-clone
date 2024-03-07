// this file stores the accordion functionalities of F A Q section


//question1 accordion
const q1Chevron = document.getElementById('q1-chevron')
const answerContainer1 = document.getElementById('answer1-container')
const qaContainer1 = document.getElementById('qa-container1');
const q1 = document.getElementById('q1');
const question1 = document.getElementById('question1');

q1Chevron.addEventListener('click', () => {
    if(answerContainer1.style.display === 'flex'){
        answerContainer1.style.display = 'none';
        q1Chevron.style.transform = 'rotateZ(0deg)'
        qaContainer1.style.border = '1px solid black'
        q1.style.color = 'black'
        question1.style.color = 'black'
        q1Chevron.style.color = 'black'
    }else{
        answerContainer1.style.display = 'flex';
        q1Chevron.style.transform = 'rotateZ(90deg)'
        qaContainer1.style.border = '1px solid rgb(1, 175, 209)'
        q1.style.color = 'rgb(1, 175, 209)'
        question1.style.color = 'rgb(1, 175, 209)'
        q1Chevron.style.color = 'rgb(1, 175, 209)'
    }
});

// question2 accordion
const q2Chevron = document.getElementById('q2-chevron')
const answerContainer2 = document.getElementById('answer2-container')
const qaContainer2 = document.getElementById('qa-container2');
const q2 = document.getElementById('q2');
const question2 = document.getElementById('question2');

q2Chevron.addEventListener('click', () => {
    if(answerContainer2.style.display === 'flex'){
        answerContainer2.style.display = 'none';
        q2Chevron.style.transform = 'rotateZ(0deg)'
        qaContainer2.style.border = '1px solid black'
        q2.style.color = 'black'
        question2.style.color = 'black'
        q2Chevron.style.color = 'black'
    }else{
        answerContainer2.style.display = 'flex';
        q2Chevron.style.transform = 'rotateZ(90deg)'
        qaContainer2.style.border = '1px solid rgb(1, 175, 209)'
        q2.style.color = 'rgb(1, 175, 209)'
        question2.style.color = 'rgb(1, 175, 209)'
        q2Chevron.style.color = 'rgb(1, 175, 209)'
    }
});

// question3
const q3Chevron = document.getElementById('q3-chevron')
const answerContainer3 = document.getElementById('answer3-container')
const qaContainer3 = document.getElementById('qa-container3');
const q3 = document.getElementById('q3');
const question3 = document.getElementById('question3');

q3Chevron.addEventListener('click', () => {
    if(answerContainer3.style.display === 'flex'){
        answerContainer3.style.display = 'none';
        q3Chevron.style.transform = 'rotateZ(0deg)'
        qaContainer3.style.border = '1px solid black'
        q3.style.color = 'black'
        question3.style.color = 'black'
        q3Chevron.style.color = 'black'
    }else{
        answerContainer3.style.display = 'flex';
        q3Chevron.style.transform = 'rotateZ(90deg)'
        qaContainer3.style.border = '1px solid rgb(1, 175, 209)'
        q3.style.color = 'rgb(1, 175, 209)'
        question3.style.color = 'rgb(1, 175, 209)'
        q3Chevron.style.color = 'rgb(1, 175, 209)'
    }
});

// question4
const q4Chevron = document.getElementById('q4-chevron')
const answerContainer4 = document.getElementById('answer4-container')
const qaContainer4 = document.getElementById('qa-container4');
const q4 = document.getElementById('q4');
const question4 = document.getElementById('question4');

q4Chevron.addEventListener('click', () => {
    if(answerContainer4.style.display === 'flex'){
        answerContainer4.style.display = 'none';
        q4Chevron.style.transform = 'rotateZ(0deg)'
        qaContainer4.style.border = '1px solid black'
        q4.style.color = 'black'
        question4.style.color = 'black'
        q4Chevron.style.color = 'black'
    }else{
        answerContainer4.style.display = 'flex';
        q4Chevron.style.transform = 'rotateZ(90deg)'
        qaContainer4.style.border = '1px solid rgb(1, 175, 209)'
        q4.style.color = 'rgb(1, 175, 209)'
        question4.style.color = 'rgb(1, 175, 209)'
        q4Chevron.style.color = 'rgb(1, 175, 209)'
    }
});