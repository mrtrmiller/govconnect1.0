import { Lesson } from "@/types/lesson";
export const lesson: Lesson = {
  title: "Supreme Court Decision Raises Questions About Federal Power",

  category: "Current Event",
  date: "Friday, June 26, 2026",
  readTime: 4,
  learningTarget:
  "Explain how federalism shapes the relationship between state and national governments.",

  summary: [
    "The Supreme Court recently issued a decision that has renewed debate over the balance of power between the federal government and the states.",

    "Supporters believe the decision reinforces constitutional limits on federal authority, while critics argue it may reduce the federal government's ability to respond to nationwide issues.",

    "The case highlights one of the central ideas in American government: federalism."
  ],

  vocabulary: [
    {
      term: "Federalism",
      definition: "Power divided between the national and state governments."
    },
    {
      term: "Judicial Review",
      definition: "The power of courts to determine whether government actions follow the Constitution."
    },
    {
      term: "Supremacy Clause",
      definition: "Federal law takes priority when it conflicts with state law."
    }
  ],

  questions: [
  {
    prompt: "What constitutional principle is most connected to this story?",
    feedback:
      "Strong answers should mention federalism because the story is about the balance of power between national and state governments."
  },
  {
    prompt: "Why might states and the federal government disagree over authority?",
    feedback:
      "Strong answers should explain that states may want local control while the federal government may want consistent national rules."
  },
  {
    prompt: "What question do you still have after reading today's article?",
    feedback:
      "Good reflection questions ask about causes, consequences, stakeholders, or how this decision could affect people."
  }
]
};