import Link from "next/link";
import React from "react";

const page = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence",
      author: "Jane Doe",
      date: "2023-08-25",
      content:
        "In this post, we explore the potential of AI to revolutionize various industries, from healthcare to finance.",
      tags: ["AI", "Technology", "Future"],
      comments: [
        {
          user: "John Smith",
          comment: "Great article! Excited about the future of AI.",
          date: "2023-08-26",
        },
      ],
    },
    {
      id: 2,
      title: "Top 10 Healthy Eating Tips",
      author: "Emily Johnson",
      date: "2023-08-22",
      content:
        "Healthy eating is essential for maintaining a balanced lifestyle. In this blog, we cover the top 10 tips for eating healthy.",
      tags: ["Health", "Nutrition", "Lifestyle"],
      comments: [
        {
          user: "Sarah Lee",
          comment:
            "Thanks for the tips! I've started incorporating more veggies into my diet.",
          date: "2023-08-23",
        },
      ],
    },
    {
      id: 3,
      title: "Exploring the World: Top Travel Destinations",
      author: "Chris Martin",
      date: "2023-08-20",
      content:
        "Traveling is a wonderful way to experience new cultures. In this post, we highlight top travel destinations for 2023.",
      tags: ["Travel", "Adventure", "Culture"],
      comments: [
        {
          user: "Lisa Turner",
          comment:
            "Rome is definitely on my bucket list! Thanks for the recommendations.",
          date: "2023-08-21",
        },
      ],
    },
    {
      id: 4,
      title: "How to Start a Successful Blog",
      author: "Mark Thompson",
      date: "2023-08-18",
      content:
        "Blogging can be a rewarding career. Learn how to start and grow a successful blog from scratch.",
      tags: ["Blogging", "Content Creation", "Career"],
      comments: [
        {
          user: "Amanda Lee",
          comment: "This is so helpful for beginners like me!",
          date: "2023-08-19",
        },
      ],
    },
    {
      id: 5,
      title: "Fitness for Beginners: Where to Start",
      author: "Rachel Adams",
      date: "2023-08-15",
      content:
        "Getting into fitness can be overwhelming. Here's a guide to help beginners start their fitness journey.",
      tags: ["Fitness", "Health", "Wellness"],
      comments: [
        {
          user: "Tom Baker",
          comment: "Just what I needed to get started!",
          date: "2023-08-16",
        },
      ],
    },
    {
      id: 6,
      title: "The Ultimate Guide to Personal Finance",
      author: "David Clark",
      date: "2023-08-12",
      content:
        "Managing your finances effectively is key to a stable and secure life. Here's an ultimate guide to personal finance.",
      tags: ["Finance", "Budgeting", "Investing"],
      comments: [
        {
          user: "Laura Wilson",
          comment:
            "Thanks for the detailed guide. I've already started budgeting better.",
          date: "2023-08-13",
        },
      ],
    },
    {
      id: 7,
      title: "Mindfulness and Meditation: A Beginner's Guide",
      author: "Sophia Green",
      date: "2023-08-10",
      content:
        "Mindfulness and meditation are powerful tools for mental well-being. Learn how to start your practice.",
      tags: ["Mindfulness", "Meditation", "Well-being"],
      comments: [
        {
          user: "Ethan White",
          comment:
            "I've been looking to start meditating. This guide is perfect.",
          date: "2023-08-11",
        },
      ],
    },
    {
      id: 8,
      title: "The Rise of Remote Work",
      author: "Michael Harris",
      date: "2023-08-08",
      content:
        "Remote work has become more popular than ever. Explore the benefits and challenges of this new work model.",
      tags: ["Remote Work", "Career", "Productivity"],
      comments: [
        {
          user: "Nina Patel",
          comment: "Remote work has changed my life for the better.",
          date: "2023-08-09",
        },
      ],
    },
    {
      id: 9,
      title: "Sustainable Living: How to Reduce Your Carbon Footprint",
      author: "Olivia Brown",
      date: "2023-08-05",
      content:
        "Living sustainably is crucial for the planet. Here are some practical ways to reduce your carbon footprint.",
      tags: ["Sustainability", "Environment", "Eco-friendly"],
      comments: [
        {
          user: "Paul Stevens",
          comment:
            "I've started implementing some of these tips in my daily life.",
          date: "2023-08-06",
        },
      ],
    },
    {
      id: 10,
      title: "The Power of Networking for Career Success",
      author: "Anna Roberts",
      date: "2023-08-02",
      content:
        "Networking is a key factor in career advancement. Learn how to network effectively and grow your career.",
      tags: ["Career", "Networking", "Professional Development"],
      comments: [
        {
          user: "Daniel Moore",
          comment:
            "Networking has helped me get where I am today. Great advice!",
          date: "2023-08-03",
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-2 px-2">
      {blogs?.map((blog) => (
        <div key={blog?.id} className="border-2 p-2">
          <h2>{blog?.title}</h2>
          <h5 className="flex justify-between items-center">
            <span className="text-orange-900">{blog?.author}</span>{" "}
            <span className="text-red-400">{blog?.date}</span>
          </h5>
          <Link
            href={`/about/blogs/${blog?.id}`}
            className="text-blue-700 hover:underline"
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default page;
