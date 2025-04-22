"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, Clock, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Sample test data - replace with your actual psychometric test questions
const testData = {
  title: "Personality Assessment",
  description: "This test measures various aspects of your personality traits. Please answer honestly.",
  timeLimit: 10 * 60, // 10 minutes in seconds
  questions: [
    {
      id: 1,
      text: "I enjoy being the center of attention at social gatherings.",
      options: [
        { id: "a", text: "Strongly Disagree" },
        { id: "b", text: "Disagree" },
        { id: "c", text: "Neutral" },
        { id: "d", text: "Agree" },
        { id: "e", text: "Strongly Agree" },
      ],
    },
    {
      id: 2,
      text: "I prefer to plan my activities carefully rather than act spontaneously.",
      options: [
        { id: "a", text: "Strongly Disagree" },
        { id: "b", text: "Disagree" },
        { id: "c", text: "Neutral" },
        { id: "d", text: "Agree" },
        { id: "e", text: "Strongly Agree" },
      ],
    },
    {
      id: 3,
      text: "I find it easy to empathize with others' feelings.",
      options: [
        { id: "a", text: "Strongly Disagree" },
        { id: "b", text: "Disagree" },
        { id: "c", text: "Neutral" },
        { id: "d", text: "Agree" },
        { id: "e", text: "Strongly Agree" },
      ],
    },
    {
      id: 4,
      text: "I enjoy theoretical discussions about abstract concepts.",
      options: [
        { id: "a", text: "Strongly Disagree" },
        { id: "b", text: "Disagree" },
        { id: "c", text: "Neutral" },
        { id: "d", text: "Agree" },
        { id: "e", text: "Strongly Agree" },
      ],
    },
    {
      id: 5,
      text: "I prefer working in a structured environment with clear rules.",
      options: [
        { id: "a", text: "Strongly Disagree" },
        { id: "b", text: "Disagree" },
        { id: "c", text: "Neutral" },
        { id: "d", text: "Agree" },
        { id: "e", text: "Strongly Agree" },
      ],
    },
  ],
}

// Personality trait scoring logic (simplified)
const calculateResults = (answers: Record<number, string>) => {
  // This is a simplified example - real psychometric tests would have more complex scoring
  const traits = {
    extraversion: 0,
    conscientiousness: 0,
    agreeableness: 0,
    openness: 0,
    neuroticism: 0,
  }

  // Map questions to traits and calculate scores
  // Question 1 measures extraversion
  if (answers[1]) {
    const score = "abcde".indexOf(answers[1])
    traits.extraversion += score
  }

  // Question 2 measures conscientiousness
  if (answers[2]) {
    const score = "abcde".indexOf(answers[2])
    traits.conscientiousness += score
  }

  // Question 3 measures agreeableness
  if (answers[3]) {
    const score = "abcde".indexOf(answers[3])
    traits.agreeableness += score
  }

  // Question 4 measures openness
  if (answers[4]) {
    const score = "abcde".indexOf(answers[4])
    traits.openness += score
  }

  // Question 5 measures neuroticism (reversed)
  if (answers[5]) {
    const score = 4 - "abcde".indexOf(answers[5])
    traits.neuroticism += score
  }

  return traits
}

export default function PsychometricTest() {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [timeRemaining, setTimeRemaining] = useState(testData.timeLimit)
  const [testStatus, setTestStatus] = useState<"not-started" | "in-progress" | "completed" | "timed-out">("not-started")
  const [results, setResults] = useState<Record<string, number> | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Start the test
  const startTest = () => {
    setTestStatus("in-progress")
    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          submitTest(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  // Handle answer selection
  const handleAnswerSelect = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: value,
    }))
  }

  // Navigate to next question
  const goToNextQuestion = () => {
    if (currentQuestion < testData.questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  // Navigate to previous question
  const goToPrevQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  // Submit the test
  const submitTest = (isTimeout = false) => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    const calculatedResults = calculateResults(answers)
    setResults(calculatedResults)
    setTestStatus(isTimeout ? "timed-out" : "completed")
  }

  // Clean up timer on component unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  // Calculate progress percentage
  const progressPercentage =
    Object.keys(answers).length > 0 ? (Object.keys(answers).length / testData.questions.length) * 100 : 0

  // Get current question data
  const question = testData.questions.find((q) => q.id === currentQuestion)

  return (
    <div className="container mx-auto py-8 max-w-3xl">
      <Card className="shadow-lg">
        <CardHeader className="border-b">
          <CardTitle className="text-2xl">{testData.title}</CardTitle>
          <CardDescription>{testData.description}</CardDescription>

          {testStatus === "in-progress" && (
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className={`font-mono text-lg ${timeRemaining < 60 ? "text-red-500 animate-pulse" : ""}`}>
                  {formatTime(timeRemaining)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion} of {testData.questions.length}
                </span>
              </div>
            </div>
          )}
        </CardHeader>

        <CardContent className="pt-6">
          {testStatus === "not-started" && (
            <div className="text-center py-8">
              <h3 className="text-xl font-medium mb-4">Ready to begin the assessment?</h3>
              <p className="mb-6 text-muted-foreground">
                You will have {formatTime(testData.timeLimit)} to complete {testData.questions.length} questions. Please
                make sure you won't be interrupted during this time.
              </p>
              <Button size="lg" onClick={startTest}>
                Start Test
              </Button>
            </div>
          )}

          {testStatus === "in-progress" && question && (
            <div>
              <div className="mb-6">
                <Progress value={progressPercentage} className="h-2" />
                <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                  <span>Progress</span>
                  <span>{Math.round(progressPercentage)}%</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4">{question.text}</h3>

                <RadioGroup
                  value={answers[currentQuestion] || ""}
                  onValueChange={handleAnswerSelect}
                  className="space-y-3"
                >
                  {question.options.map((option) => (
                    <div
                      key={option.id}
                      className="flex items-center space-x-2 rounded-lg border p-3 hover:bg-muted/50 transition-colors"
                    >
                      <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                      <Label htmlFor={`option-${option.id}`} className="flex-grow cursor-pointer">
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          )}

          {(testStatus === "completed" || testStatus === "timed-out") && results && (
            <div className="py-4">
              {testStatus === "timed-out" && (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Time's up!</AlertTitle>
                  <AlertDescription>
                    Your test has been automatically submitted as the time limit was reached.
                  </AlertDescription>
                </Alert>
              )}

              {testStatus === "completed" && (
                <Alert className="mb-6 bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
                  <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <AlertTitle>Test Completed</AlertTitle>
                  <AlertDescription>Thank you for completing the assessment. Your results are below.</AlertDescription>
                </Alert>
              )}

              <h3 className="text-xl font-medium mb-4">Your Personality Profile</h3>

              <div className="space-y-4">
                {Object.entries(results).map(([trait, score]) => (
                  <div key={trait}>
                    <div className="flex justify-between mb-1">
                      <span className="capitalize">{trait}</span>
                      <span>{score}/4</span>
                    </div>
                    <Progress value={(score / 4) * 100} className="h-2" />
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">What these results mean:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>
                    <span className="font-medium">Extraversion:</span> How outgoing and social you are
                  </li>
                  <li>
                    <span className="font-medium">Conscientiousness:</span> How organized and responsible you are
                  </li>
                  <li>
                    <span className="font-medium">Agreeableness:</span> How cooperative and empathetic you are
                  </li>
                  <li>
                    <span className="font-medium">Openness:</span> How curious and open to new experiences you are
                  </li>
                  <li>
                    <span className="font-medium">Neuroticism:</span> How sensitive and anxious you tend to be
                  </li>
                </ul>
              </div>
            </div>
          )}
        </CardContent>

        {testStatus === "in-progress" && (
          <CardFooter className="flex justify-between border-t pt-6">
            <Button variant="outline" onClick={goToPrevQuestion} disabled={currentQuestion === 1}>
              Previous
            </Button>

            <div className="flex gap-2">
              {currentQuestion === testData.questions.length ? (
                <Button
                  onClick={() => submitTest(false)}
                  disabled={Object.keys(answers).length < testData.questions.length}
                  className={
                    Object.keys(answers).length < testData.questions.length ? "" : "bg-green-600 hover:bg-green-700"
                  }
                >
                  Submit Test
                </Button>
              ) : (
                <Button onClick={goToNextQuestion} disabled={!answers[currentQuestion]}>
                  Next
                </Button>
              )}
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}
