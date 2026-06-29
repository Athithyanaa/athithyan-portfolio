export const blogs = [

  { id: "code-coverage-pyats",
    title:
      "From Manual Testing to pyATS: My First Experience with Code Coverage",
    date: "June 2026",
    readTime: "4 min",
    tag: "Testing",
    excerpt:
      "How code coverage changed my understanding of testing and introduced me to automation with pyATS.",
    content: `
    
Recently, I got an opportunity to work on code coverage, and it turned out to be one of the most useful learning experiences for me. Before working on it practically, I used to think code coverage was mainly about increasing a percentage number. But once I started working on it, I understood that it is much more than that.

Code coverage helped me understand how much of the code is actually being executed during testing. It gave me visibility into the areas that were already touched and, more importantly, the areas that were not touched at all. This changed the way I looked at testing. Instead of assuming that a feature was well tested just because the test cases passed, I started checking whether the important branches, conditions, and error paths were actually exercised.

Initially, I was asked to run specific commands that would hit the required code paths. The idea was to prove that a particular part of the code was being touched during execution. At that stage, I was mostly doing things manually: running commands, checking whether the code path was triggered, observing the behavior, and validating the coverage result.

This gave me a basic understanding of how code coverage works from a practical point of view. I learned that we need to create the right scenario to make the code execute. Just running a test is not enough; the test should actually go through the logic that we want to cover.

Later, my senior suggested that instead of doing this manually every time, I should use pyATS to automate the process. This was a completely new and wonderful learning experience for me. I started understanding how automation can make testing more reliable and repeatable. Instead of manually running commands and checking results again and again, pyATS helped me think in a more structured way: prepare the test, execute the commands, collect the output, validate the result, and make the process reusable.

One of the biggest things I learned was that 100% coverage does not always mean perfect testing. A test may execute a line of code, but that does not always mean the logic is fully validated. So I started focusing not only on improving the coverage number, but also on writing meaningful tests. I looked at uncovered areas, understood why they were not covered, and then created scenarios that made sense from a real product behavior point of view.

During this process, I also learned how important it is to understand the existing code before blindly adding tests. In many places, I had to trace the flow, check input conditions, understand dependencies, and then decide the right way to cover the missing logic. This helped me improve my debugging skills as well.

Another important learning was how code coverage supports long-term product quality. When we add or modify code, proper coverage helps catch regressions early. It gives confidence that future changes will not silently break existing functionality.

Overall, working on code coverage taught me that testing is not just a final step after development. It is part of development itself. It helped me think more like a quality-conscious engineer: understand the logic, cover meaningful scenarios, validate edge cases, and make the product stronger.

For me, the most memorable part of this learning was the transition from manual command execution to automation using pyATS. That shift helped me understand the real value of automation in engineering. I now see code coverage not as a checklist activity, but as a tool that helps improve confidence, maintainability, and product reliability.

`
  },
   {
    id: "idprom-fpga",
    title:
      "What IDPROM Programming Taught Me About Platform Engineering",
    date: "June 2026",
    readTime: "3 min",
    tag: "Embedded Systems",
    excerpt:
      "A practical learning journey involving IDPROM programming, MAC setup, FPGA images and device bring-up.",
    content: `
    
In recent days, I got a chance to work on IDPROM programming related to FPGA image, and it was a very interesting learning experience for me. This was different from regular software debugging because it involved understanding the connection between software, hardware identity, board-level data, and FPGA image handling.

Initially, IDPROM programming felt like a very low-level topic. But as I started working on it, I realized how important it is in hardware-software bring-up and validation. IDPROM data helps the system identify important board-related information, and when FPGA images are involved, correctness becomes even more critical.

I started by going through the available wiki pages and following the required steps for IDPROM programming. With the guidance of my senior engineer, I performed different types of IDPROM programming activities. Since this was new to me, I had to be very careful with every step. The format, offset, programmed data, validation method, and read-back checks all needed proper attention.

One of the important tasks I worked on was setting up the MAC address of the router device. This helped me understand how board-specific information is programmed and how the system uses that information during bring-up. It was a good learning moment because I was not just executing commands; I was understanding why each step was needed.

After completing the IDPROM programming and MAC setup, I expected the device to boot properly. But even after doing these steps, the image was not booting on the device. This became a challenging phase for me. I had to check whether the programming was correct, whether the image was proper, whether the board state was fine, and whether any step was missed.

Later, with the help of another senior manager, we found that an older diag image had been loaded, and that was causing the delay. Once the newer diag image was loaded, the box finally became ready and booted up successfully with the latest image.

This was one of the best learning moments for me. Technically, I learned how IDPROM programming, MAC setup, diag image, FPGA image, and device boot-up are connected. But beyond the technical learning, I also understood the importance of collaboration.

I realized that in real engineering work, not every issue can be solved alone. Sometimes we need guidance from seniors, inputs from managers, proper communication, and teamwork to reach the final solution. This experience helped me understand what teamwork and management mean in a practical environment.

Another key learning was patience. When something does not work in a hardware-related area, the issue may be in the image, the programming procedure, the board state, the access method, the configuration, or the expected data itself. So I learned to slow down, check each step, compare expected versus actual behavior, and avoid jumping to conclusions.

Working on IDPROM programming gave me a better view of the complete product, not just one software layer. It helped me appreciate how software interacts with board-level components and how FPGA images are part of the overall system functionality.

For me, IDPROM programming was not just a technical task. It was a learning opportunity that helped me move one step deeper into platform-level engineering. It improved my confidence, taught me the value of accuracy and validation, and showed me how collaboration can make difficult tasks achievable.

    `
  },
  {
   id: "yang-sdwan",
    title:
      "Lessons from YANG Suite Testing and SD-WAN Bug Fixing",
    date: "June 2026",
    readTime: "3 min",
    tag: "Networking",
    excerpt:
      "My experience learning model-driven networking, validation workflows and structured debugging.",
    content: `
    
Recently, I worked on YANG suite testing and bug fixing in the SD-WAN area. This experience was one of the most valuable parts of my recent learning because it connected multiple areas: model-driven networking, test automation, debugging, product behavior, and real-world issue analysis.

Before this, I had a basic idea of YANG, but working on YANG suite testing gave me a much deeper understanding. I learned that YANG testing is not just about running a test suite and checking whether it passed or failed. It requires understanding the model, the expected data, the configuration flow, and how the device should respond.

At the beginning, the bug looked simple to me. It seemed like adding a new YANG file or making a small change would resolve the issue. Initially, I thought the fix would be straightforward. But once I started going deeper, I understood that the real challenge was not only in making the code change. The bigger challenge was in verification and validation.

Since YANG testing was completely new to me, the validation phase was tough. I had to understand how the YANG test flow works, how the test cases are structured, what kind of output is expected, and how to confirm that my changes were actually correct. This was very different from normal debugging because the failure could come from different places: the model, backend implementation, test case, device state, or even the setup.

While debugging, I learned to read failure logs more carefully. Earlier, I used to focus mainly on the final error message. But during this activity, I understood that the actual clue is often hidden in the sequence of events before the failure. Checking request payloads, response data, device logs, and expected versus actual behavior helped me understand where the issue was coming from.

With the help of my senior, I started performing the required checks step by step. I worked on the AUT checks and AMT checks, understood the validation process, and slowly became more confident in handling the YANG test environment. My senior’s guidance helped me understand not only what to check, but also why those checks were important.

The SD-WAN part made the learning even more interesting. SD-WAN systems involve multiple components, device configuration, operational state, templates, control connections, and validation flows. So while working on the bug, I had to think beyond just one file or one small change. I had to understand whether my change was correct from the overall product behavior point of view.

Working on a bug like this taught me how important structured debugging is. I had to reproduce the issue, understand the failing scenario, analyze logs, compare expected behavior with actual behavior, identify the affected area, make the change, and then validate the fix properly.

One of my biggest takeaways was that a bug may look simple at the beginning, but proper verification can reveal how deep the actual work is. Adding or modifying a file may be one part of the fix, but proving that the fix is correct is equally important. I learned that validation gives confidence not only to the developer, but also to the entire team.

This experience also improved my ownership mindset. When we debug a real issue, we cannot stop at surface-level understanding. We need to ask: Why did this fail? Is this the right behavior? Can this affect other scenarios? Is the fix safe? Are there regression impacts? How do we prove the issue is resolved?

Finally, after completing the required AUT and AMT checks and verifying the changes with my senior’s support, I was able to confirm that my changes were correct. That gave me a lot of confidence.

For me, YANG suite testing and SD-WAN bug fixing was not just another task. It was a practical learning journey that improved my debugging skills, helped me understand YANG-based validation, and taught me the importance of patience, guidance, and proper verification in real-world product development.
    `
  },

  {
    id: "dp-states",
    title: "How I Learned to Identify DP States",
    date: "June 2026",
    readTime: "1 min",
    tag: "DSA",
    excerpt:
      "My framework for understanding Dynamic Programming instead of memorizing solutions.",

    content: `
When I started Dynamic Programming, my biggest challenge wasn't writing code—it was figuring out the DP state.

I used to memorize solutions without understanding why a particular state was chosen.

Eventually I learned the key question:

"What information from the past affects future decisions?"

If future decisions only depend on the last element, the state only needs the last element.

If they depend on the last two elements, the state only needs those two.

This mindset completely changed how I approach DP.
`
  },


  {
    id: "iiot-roadmap",
    title: "My Roadmap from IIoT Engineer to Software Engineer",
    date: "May 2026",
    readTime: "1 min",
    tag: "Career",

    excerpt:
      "My learning path from Embedded Networking into Software Development.",

    content: `
My current role focuses on Cisco Industrial IoT Routing.

To move toward Software Engineering I am focusing on:

Java
Spring Boot
DSA
System Design
Cloud

This roadmap helps me bridge both domains.
`
  }
];
