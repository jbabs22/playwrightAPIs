import { test, expect } from '@playwright/test'
import * as fs from 'fs';

const baseURL = "https://jsonplaceholder.typicode.com";


// // TEST SUITE (describe) //
// test.describe.parallel("API Testing", () => {
    
//     // TEST CASE 1 (test) - GET
//     test("Simple API Test - Assert Response Status", async ({ request }) => {
//         const response = await request.get(`${baseURL}/posts/2`)

//         // VALIDATE RESPONSE
//         expect(response.status()).toBe(200)
//     })
// });


// test.describe.parallel("API Test2 - GET", () => {
//     test("Simple GET", async ({ request }) => {
//         const response = await request.get(`${baseURL}/posts/2`)

//         expect(response.status()).toBe(200)
//     })
// });



    // // TEST CASE 2 (test) - POST
    // test("POST Request - Creating a Resource", async ({ request }) => {
    //     const response = await request.post(`${baseURL}/posts`, {
    //       data: {
    //         title: "New Title!",
    //         body: "this is the Body!",
    //         userId: 10,
    //       },
    //     });
    //     const responseBody = JSON.parse(await response.text());
    //     console.log(responseBody);
    //     expect(responseBody.title).toBe("New Title!");
    //     expect(responseBody.body).toBe("this is the Body!");
    //     expect(responseBody.userId).toBe(10);
    //     expect(responseBody.id).toBeTruthy();
    //   });



    test("Manipulation - Get Data, Extract Last 5 Posts, Reverse Results, and Save as an Artifact", async ({ request }) => {
        // Collect data
        const response = await request.get(`${baseURL}/posts`);
        const posts: any[] = await response.json();
    
        // Select the last 5 results
        const lastFivePosts = posts.slice(-5);
    
        // Manipulate data (reversing the order in this example)
        const reversedPosts = lastFivePosts.toReversed();
    
        // Save manipulated data as an artifact
        fs.writeFileSync(
          "artifactLast5.json",
          JSON.stringify(reversedPosts, null, 2)
        );
      });


    // //  TEST CASE 3 - WORKFLOW
    // test("Workflow (including manipulation) - Get Data, Reverse It, and Save as Artifact", async ({ request }) => {
        
    //     try {
    //         // Collect data
    //         const response = await request.get(`${baseURL}/posts`);
    //         if (!response.ok) {
    //             throw new Error(`Failed to fetch posts: ${response.statusText}`);
    //         }
            
    //         // Using `any` type for the posts array
    //         const posts: any[] = await response.json();
    
    //         // Manipulate data (reversing the order)
    //         const reversedPosts = posts.toReversed();
    
    //         // Save manipulated data as an artifact
    //         fs.writeFileSync("artifact.json", JSON.stringify(reversedPosts, null, 2));
    
    //     } catch (error) {
    //         console.error("An error occurred during the workflow:", error);
    //     }
    // });










































//     // TEST CASE 2 (test) - POST
//     test("POST Request - Creating a Resource", async ({ request }) => {
//         const response = await request.post(`${baseURL}/posts`, {
//           data: {
//             title: "New Title!",
//             body: "this is the Body!",
//             userId: 10,
//           },
//         });
//         const responseBody = JSON.parse(await response.text());
//         console.log(responseBody);
//         expect(responseBody.title).toBe("New Title!");
//         expect(responseBody.body).toBe("this is the Body!");
//         expect(responseBody.userId).toBe(10);
//         expect(responseBody.id).toBeTruthy();
//       });
    
//     //  TEST CASE 3 - WORKFLOW
//     test("Workflow (including manipulation) - Get Data, Reverse It, and Save as Artifact", async ({ request }) => {
        
//         try {
//             // Collect data
//             const response = await request.get(`${baseURL}/posts`);
//             if (!response.ok) {
//                 throw new Error(`Failed to fetch posts: ${response.statusText}`);
//             }
            
//             // Using `any` type for the posts array
//             const posts: any[] = await response.json();
    
//             // Manipulate data (reversing the order)
//             const reversedPosts = posts.toReversed();
    
//             // Save manipulated data as an artifact
//             fs.writeFileSync("artifact.json", JSON.stringify(reversedPosts, null, 2));
    
//         } catch (error) {
//             console.error("An error occurred during the workflow:", error);
//         }
//     });
// })