import React, { Component } from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        rightAnswerId: 2,
        id: 1,
        question: 'Какого цвета небо?',
        answers: [
          { text: 'Черный', id: 1 },
          { text: 'Синий', id: 2 },
          { text: 'Красный', id: 3 },
          { text: 'Зеленый', id: 4 }
        ]
      },
      {
        rightAnswerId: 1,
        id: 2,
        question: 'Столица Украины?',
        answers: [
          { text: 'Киев', id: 1 },
          { text: 'Харьков', id: 2 },
          { text: 'Одесса', id: 3 },
          { text: 'Львов', id: 4 }
        ]
      }
    ]
  }


  onAnswerClickHandler = (answerId) => {

    this.setState({
      answerState: { [answerId]: 'success' }
    })

    const question = this.state.quiz[this.state.activeQuestion]

    if (question.rightAnswerId === answerId) {

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log('finished')
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout)
      }, 500)

    } else {
      this.setState({
        answerState: { [answerId]: 'error' }
      })
    }

  }


  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className={classes.Quiz}>

        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>

      </div>
    )
  }
}

export default Quiz