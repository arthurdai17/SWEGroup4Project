# **BACKGROUND AND MOTIVATION**

>### **Background Literature:**


### **Agile:**


In the past, when a new application was in the process of being conceived, the development process was guided largely by the so called ‘Waterfall’ methodology. In short, this framework consisted of 4 main stages, namely: 

1. Document Brief 

2. Coding 

3. Integration 

4. Testing 

The first stage involved creating a document brief that would outline the entire specification requested by the client – anything from functional specifications to user interface designs. Online once this document was compiled could the next stage of the process begin.  

Once the document brief was compiled, the technical team outlined their own brief for the technical requirements of the project – ideas would range from the application’s architecture and data structures to user interfaces. Only once this document was complete could the team start to actually code a build the application. Integration and testing were left until the very end, which was possible since there was a very clear plan for what the product was going to be and what components would be a part of it. 

There are a few advantages to this method. For instance, there is rarely any discrepancy about what the product should be as it has already been thoroughly detailed in the document brief. All teams can also be on the same page at every stage of the process by simply referring to the brief. The disadvantage of this however, is that once the brief has been outlined, it is effectively set in stone. There is no room for it to change without rewriting it and starting the process all over again. Another disadvantage of this is that the client is unable to see a finished product until the whole process is complete (after the testing phase). If the client then decides to change something, the process may have to start from the beginning again, wasting a lot of the time and money that was used to deliver a finished product in the first place.  

The AGILE method is an answer to this problem and is based around 4 key principals (Sacolick, I, 2020): 

1. Individuals and interactions over processes and tools 

2. Working software over comprehensive documentation 

3. Customer collaboration over contract negotiation 

4. Responding to change over following a plan 

At first glance it is very clear that the AGILE methodology provides a much more flexible framework to work with, where the focus is on collaboration, particularly with the client who plays an active role throughout the development process. The two most common interpretations of the AGILE methodology are the Scrum approach and the Kanban approach.  

The Scrum approach splits the development process into short cycles, with the aim of producing a working product as soon as possible. The defining, coding, integration and testing stages can all happen within a single cycle to effectively produce a prototype of the application much soon than would be possible using the Waterfall methodology. A batch of tasks and requirements are outlined before the beginning of a cycle and items are placed on the agenda at the earliest time possible. These tasks and requirements are essentially fixed for the period of the cycle, but can be changed before that start of the next cycle, thus providing some flexibility. Scrum also insists on clearly defined roles for each team member and is generally a good approach for projects whose priorities are fairly stable over time. In other words, changes are relatively infrequent throughout the project’s timeline.  

The Kanban approach still implements the principles of AGILE but deviates from the Scrum method in a number of ways. The most notable difference is that it does not insist on clearly defined roles for team members, but rather promotes a more collaborative environment for the team to work in. While the methodology does aim to create a working product as soon as possible, it foregoes the idea of sprints to achieve this and instead presents a continuous project timeline where new tasks can be added and removed at any point. This tends to make the Kanban approach somewhat more flexible than the Scrum approach, thus making it ideal for projects that have widely varying priorities.  

It is clear that the AGILE methodology provides a much more flexible and dynamic framework to work with compared to the Waterfall approach. Including clients throughout the development process is extremely valuable and can save a lot of time, money and effort, particularly when things need changing. For these reasons, as well as the additional advantages outlined above, the team has decided to follow the AGILE methodology for this project. 

___

### **Active recall:**

For years, teachers and professors have been telling their students to read through any relevant reading material, write down the key words and phrases, make detailed notes on the content and then reread everything regularly. This is a useful first step, however, more recent research suggests that something is missing from this process. In addition to reading the notes, it is also advisable to ‘close the book’ and rewrite the notes from memory (preferably in your own words). This last step is perhaps the most important when it comes to memorising content, yet it is often the step that is most overlooked.  

Active recall is simply the process of testing oneself on previously learned content. In two separate psychology journals, papers have been published outlining that active recall methods such as: “recitation”, “flashcards” or “self-quizzing” are the most effect way of committing new content to a person’s long-term memory. Many students intuitively feel that rereading material numerous times will help with retention, and while this may have some merit, it would require a high number of repetitions for it to be effective. This makes it a very time-consuming option. Passive revision strategies such as this often require much less effort to carry out making students feel they can study for longer periods of time. This false sense of productivity hides the realisation that they could accomplish the same task in a shorter amount of time by implementing active recall strategies in place of passive ones.  

An argument could be made that active recall strategies result in people who are just good at rote memorisation but are perhaps unable to apply that knowledge to real-world scenarios. However, a paper published by McDaniel (Glenn, D, 2009) outlines one particular experiment where two sets of participants were given a problem to solve. The first group read the relevant material and then recited the material after reading it. The second group simply reread the material twice. The results showed that the first group outperformed the second on tasks involving “analysing and drawing inferences from the material” up to a week later. This paper suggests that active recall strategies not only help people to retain information, but also allow them to use the information more effectively in a practical setting. 

___

### **MERN vs MEAN:**

There are a number of different full stack frameworks that can be used to implement a single page web application. These include; the MEAN stack, MERN stack, Django stack, LAMP stack and more (GeeksforGeeks, 2019). Since we were introduced to the MEAN stack in our technical workshops and were being provided with step-by-step tutorials on how to implement a MEAN stack web app, it made sense on a practical level to try and stick as closely to the MEAN stack as possible. The individual components of the MEAN stack each have its own strengths, especially in comparison to popular alternatives. For example, Both MongoDB and MySQL are very popular and widely used databases. The major difference between them being that MySQL is a relational database, whereas MongoDB is a document-oriented database. That means, MongoDB represents data in documents and MySQL represents data in tables and rows (mongoDB, n.d.). The differences in data structures makes MongoDB much easier to learn and use, especially for small web apps (mongoDB, n.d.). The JSON structure is also more suitable for web apps. MongoDB also offers a free cloud hosted database system called MongoDB ATLAS which is much more easily accessible compared to the MySQL cloud hosted database. Therefore, this makes MongoDB the better choice of database for our project.  

Express is a backend web framework for Node. The benefit of using Express is that it greatly simplifies the process of web application development. It also has a great scalability in that you can easily write your own middleware and APIs and insert them to the server. The main advantages of using Express include: it allows you to easily create a REST API server, it allows you to define routes of your application based on HTTP methods and URLs, it easily connects to databases such as MongoDB and it’s easy to configure (TutorialsTeacher, n.d.).  Although the cons of using Express and Node can sometimes be that there are issues with call-backs and the fact that there are sometimes client request problems with the middleware system (Syamlal, 2020), the ease of use of Express, speed and amount of resources online still make it the better choice of framework compared to its alternatives.  

The part of the MEAN stack that causes the most controversy is deciding which is a better frontend framework Angular (making it a MEAN stack) or React (making it a MERN stack). React is much more widely used in comparison to Angular and is also has a much easier learning curve (Holas, n.d.).  Arguably, React also trumps Angular in that is it better for isolated debugging and is better in terms of performance due to its small bundle size (Holas, n.d.). Although Angular does provide some extremely powerful tools such as the Angular CLI, Angular universal for server-side rendering and more. Both React and Angular provide robust ecosystems, however, a survey from the stateofjs.com of 21,717 respondents revealed that ‘ 71.7% used React before, and WOULD use it again (satisfaction: 89.33% for 16,099 users) whilst 21.9% used Angular before, and WOULD use it again (satisfaction: 37.95% for 11,582 users)’ (Holas, n.d.). Since react is seen more favourably by developers and is more commonly used, it is arguably the better frontend framework to use especially for beginners as it is more likely that there will be a wider variety of resources online.  

The benefits of using JavaScript as the main language for our project is evident due to its popularity, the fact that it is widely-supported and that it is the main language used throughout the MEAN stack. This prevents you from having to learn another language and therefore saves implementation time. 

___

### **Applications currently on the market:**

There are a number of applications relating to cultural education that are currently on the market. The large majority of these however, focus on content delivery rather than actual learning. One of the few applications that has attempted to incorporate both aspects is a Google application called ‘Google Arts & Culture’. Google has created both a web application as well as mobile applications for this service. The service itself presents users with information, which is categorised by country. Users are then able to click on the countries they would like to investigate and gain access to a wide range of games and activities to facilitate this process.  

Despite its wide range of activities there is a huge amount of content that users are presented with. It also presents users with information first before assessing knowledge through the various activities. Studies into active recall have shown that attempting to answer questions, even before learning anything about the content, facilitates learning in a way that is much more effective than starting with more passive methods, such as reading. Our application differs from Google’s in that we start with questions and present users with content later in the process. This allows users to play a more active role in learning and engage them right from that start. The hope is that this will allow users to learn the content and commit it to memory in a much shorter timeframe than using more traditional passive methods.   

___






