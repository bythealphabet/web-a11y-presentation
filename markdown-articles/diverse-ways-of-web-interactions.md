# Diverse Ways of Web Interaction

![Stephen William Hawking was an English theoretical physicist, cosmologist, and author sitting in his wheel chair with accessible technology in front of a class blackboard, the black board has some mathematical notations](../public/markdown-images/professor-stephen-hawking.avif "Stephen William Hawking was an English theoretical physicist, cosmologist, and author sitting in his wheel chair with accessible technology in front of a class blackboard, the black board has some mathematical notations")

With the use of accessible technology, Stephen Hawking was able to interact with the world and share his knowledge with the world. How does others with disabilities interact with the web?
By understanding the different ways people interact with the web, we can build a better web for everyone.

### Living Life with Disabilities

In order for us to start applying accessibility in our daily work, we need to understand the different types of disabilities and how people with disabilities use the web.

Disabilities can vary and include:

- Vision
- Movement
- Thinking
- Remembering
- Learning
- Communicating
- Hearing
- Mental Health
- Social Relationships

Disabilities can be temporary or lifelong. People may have more than one disability, and individuals with the same disability can experience it differently.

**Important Points to take into account:**
We should also be aware, of the fact that most assistive technologies are not free. and so many times people with disabilities do not updated them as often as they should. This is why it is important to make sure that the website is accessible using older versions of assistive technologies.
At the same time it is risky for users with disabilities to switching to a newer version and losing there settings, and not being able to fix issues without assistance.

### Screen Readers

Screen readers convert digital text into synthesized speech. They empower users to hear content and navigate with the keyboard. The technology helps people who are blind or who have low vision to use information technology with the same level of independence and privacy as anyone else.

what screen readers do:

- read the content of the page
- Display a list of links
- Display a list of headings

The only problem for developers is that there are many different screen readers, and each one has its own set of keyboard shortcuts. So, it is important to test the website with different screen readers.

For 90% of the time the experience is the same for all screen readers. But occasionally, you can run into screen reader specific issues. or even version specific issues.

### Visual, Disability

Some of us use contact lenses or glasses to see the web. This is also a form of disability. For people with color low vision, maybe using glasses or contact lenses is not enough, and they rely on features such as

- zoom
- font size
- color and contrast
- text spacing
- text-to-speech

Users should use their custom settings, such as zoom, font size, color and contrast, text spacing, and text-to-speech, to make the web more accessible. So, it is important to make sure that the website is accessible when these settings are applied. For example, if the website is not accessible when the font size is increased, then it is a barrier for users with low vision.
using colors to convey information is a form of disability. For example, people with color blindness may not be able to distinguish between red and green. So, it is important to use other visual cues, such as icons, to convey information.

other common visual barriers for users with low vision include:

- no audio description for video content
- missing captions for video content
- no text alternatives for images
- incorrect label for form fields (e.g, using a placeholder as a label)
- no focus indicator for keyboard users
- inconsistent navigation

tools:
AWS, NVDA and, “Digital accessible information system” (DAISY) is a technical standard to publish your
digital content or any digital documents in audio books or periodicals to
help users with disabilities

### Hearing Disability

People with hearing disabilities may not be able to hear audio content. So, it is important to provide captions for video content and transcripts for audio content.

Hearing Disabilities:

Many people experience hearing problems due to aging.
Loss of hearing is a common disability.
Website-based videos should have audio descriptions. An Audio descriptions is a transcripts of the video, describing what is being said on the video or describing sounds made in the video.
Videos with no background noise are essential for better understanding.
Sign language is a common communication method for those with hearing disabilities.

### Learning, Cognitive, Necrological and hidden unnoticed disabilities.

When we build accessible websites it is good practice to test against various combinations of disabilities i mind.

- Attention Deficit Hyperactivity Disorder (ADHD), user with trouble focusing.
- Autism
- Down syndrome (intellectual disabilities)
- Depression, mental health disabilities
- Memory impairments
- Multiple Sclerosis (MS), a disease that affects the brain and spinal cord
- Dyslexia, a reading disability
- Migraines, a severe headache
- Epilepsy, a neurological disorder

barriers for users with cognitive disabilities include:

- Complex phrases, words or long sentences.
- Flashing content, animations or moving content (e.g., carousels), three or below is recommended, refer to Web Content Accessibility Guidelines (WCAG) 2.3.1.
- No options to stop, pause or animated or moving content.
- Complex navigation
- Audio of a media file starts automatically, with no turn off/on/pause options.

### Speech Disability

When building Voice recognition or Voice Recording options in the website, it is important to consider the users with speech disabilities.

Speech disabilities include:

- Dysarthria, a motor speech disorder, slow speech with limited movement of the tongue, lips, and jaw.
- Alalia, speech delay.

An example would be if you get a cold and temporarily lose your voice. it will be very difficult to communicate with others. so you will use text messaging or email to communicate with others, which if a very common in our world today.

It is quite common that websites provide a contact option for users via a phone call. This is a barrier for users with speech disabilities. It is important to provide other options such as email, chat, or text messaging.

### Physical Disability

Any physical disability that affects the use of hands, arms, or mobility can be a barrier for users.

Physical disabilities include:

- Joint disorders
- chronic pain
- broken or loss of limbs
- paralysis

Many people with physical disabilities use assistive technologies, such as mouth sticks, head wands, or single switches, to interact with the web. So, it is important to make sure that the website is accessible using a keyboard.

A famous example is Stephen Hawking, a theoretical physicist, cosmologist, and author, who had a motor neuron disease that gradually paralyzed him over the decades. He used a single switch to interact with the web.

Common barriers for users with physical disabilities include:

- No keyboard focus indicator, users does not know where they are on the page.
- limited time is given to complete a action, eg. filling out a form for booking a flight.
- small clickable areas
- no skip navigation option, users are forced to navigate through all the links on the page, before reaching the main content.
- Not providing a clear narration of form navigation, users are not aware of the current form field they are on.
- No clear error messages, users are not aware of the error and how to fix it.
- or asking users to resubmit the complete form, when only one field is incorrect.

## Web Accessibility development life cycle.

## Web Accessibility components

Several different components work together to create a web accessible page. These components include:

- Content
- Web Browser
- Assistive Technology
- Users
- Developers, Programmers, Designers, Content Creators, and Testers
- Authoring Tools
- Evaluation Tools

Each of this components are interdependent on each other. For example, the designer and the developer did there best to great an accessible website, but the content is not. and so the user will not be able get the information they need on the website.

### Accessibility Failure Models

**"Accessibility is an Afterthought, or Testing at the End on a live website"**
Trying to add accessibility features after creating the website is a common mistake. It is important to consider accessibility from the beginning of the project. What is meant by the beggining of the project is, from the point we are creating a persona, in the design phase, in the development phase, and in the testing phase.
This will help avoid costly mistakes and save time and money.

**"Accessibility as a Sprint"**
Similar to the previous model, creating one sprint to tackle accessibility is not a good idea. Accessibility should be part of every sprint. This will help avoid accessibility debt.

**"Accessibility as an Audit tool only"**
Using a tool that does a check on the build check pipeline is not enough. It is important to have a human check as well. For example, a tool may not be able to detect if the alt text is meaningful or not. also tools can get outdated and not be able to detect new accessibility issues.

It is very important for the developers to have a good understanding of the accessibility guidelines and to be able to implement them in the code. but also being able to test or debug or check PR's code for accessibility issues in the code.
having a designated accessibility expert in the team, that does these checks regularly while the team is working on new features will be a good way to avoid costly mistakes in the future.

### Accessibility Success Models

## Understanding Standards and Definitions

Web Content
Accessibility Guidelines (WCAG) is a world renowned guideline of
accessibility recommendations, which is developed through the W3C
process to help organizations meet the minimum standard accessibility
guidelines and it has become critical for every organization to focus on
implementing the accessibility checks at every stage of their application
development to avoid unaffordable mistakes.
