import prisma from "./database";

(async () => {

  const students1 = await prisma.student.groupBy({
    by: ['class'],
    _count: {
      class: true
    },
    orderBy: { 
      _count: { 
        class: 'asc' 
      } 
    }
  }) 
  console.log('count de estudantes por classe:', students1);

  const students2 =  await prisma.student.groupBy({
    where: {
      jobId: null
    },
    by: ['class'],
    _count: {
      class: true
    },
    orderBy: { 
      _count: { 
        class: 'asc' 
      } 
    }
  }) 
  console.log('count de estudantes por classe que não tem emprego:', students2);
  
})()