---
layout: syllabus.hbs
title: Programming Design Systems
date: 2017-08-18 16:54:00
excerpt: |
  In this course students explore the field of graphic design through code. The course is built around a traditional graphic design syllabus, where students learn about visual communication (shapes, color, grid systems, typography, etc), but rather than making static designs, students will use P5.js to create systematic, dynamic designs. A significant part of the class will be devoted to understanding systems as an important part of our design history. The class aims not only to teach students how to create graphic designs with P5.js, but also to have something interesting to say about it.
poster: https://assets.runemadsen.com/work/waza.jpg
---

**Programming Design Systems** is a course focused on the intersection between
graphic design and code. Class time is divided between design topics like color,
grid systems, and typography, and more computational topics like randomization,
repetition, transformation and generative form. The students work to write
software that abstract these design theories into code, and show the work in
class for design critique.

Weekly readings include relevant writings from the history of graphic design,
articles from the history of computation, and everything in between. The class
aims not only to teach the students how to create designs via code, but also to
have something interesting to say about it.

### Teacher Info

- Rune Skjoldborg Madsen
- rune@runemadsen.com
- [www.runemadsen.com](http://www.runemadsen.com)

## Introduction

Until recently, the term Graphic Designer was used to describe artists firmly
rooted in the fine arts. Aspiring design students graduated with MFA degrees,
and their curriculums were based on traditions taught by painting, sculpture and
architecture. Paul Rand once famously said: _"It’s important to use your hands.
This is what distinguishes you from a cow or a computer operator"_. At best,
this teaches the designer not to be dictated by their given tool. At worst, the
designer is institutionalized to think of themselves as thinkers: the direct
opposite to a technical person.

This has obviously changed with the advent of computers (and the field of web
design in particular), but not to the degree that one would expect. Despite
recent efforts in defining digital-first design vocabularies, like Google’s
Material Design, the legacy of the printed page is still omnipresent. Even the
most adept companies are organized around principles inherited from desktop
publishing, and, when the lines are drawn, we still have separate design and
engineering departments. Products start as static layouts in the former and
become dynamic implementations in the latter. Designers use tools modeled after
manual processes that came way before the computer while engineers work in
purely text-based environments. I believe this approach to design will change in
a fundamental way and, like Donald Knuth, I’ll call this the transition from
design to meta-design.

So what is meta-design? In a traditional design practice, the designer works
directly on a design product. Be it a logo, website, or a set of posters, the
designer is the instrument to produce the final artifact. A meta-designer works
to distill this instrumentation into a design system, often written in software,
that can create the final artifact. Instead of drawing it manually, she is
programming the system to draw it. These systems can then be used within
different contexts to generate a range of design products without much effort.

[Read more](http://runemadsen.com/blog/on-meta-design-and-algorithmic-design-systems/)

## Week 1: Hello World

> Beauty is a function, after all, of any relevant visual message. Just as prose
> can be dull and straight-forward or well edited and lyrical, so too can a
> utilitarian object be designed to be more than just simply what it is.
>
> _Timothy Samara, Design Elements_

In this class we'll introduce ourselves, and talk a little bit about the class,
graphic design and computation. Please read these texts before coming to the
first class.

### Class Overview

- Introductions
- About the class
- Syllabus Walk-Through
- Lecture: A History of Design Systems

### Assignment for next week

- Read
  [On meta-design and algorithmic design systems](http://runemadsen.com/blog/on-meta-design-and-algorithmic-design-systems/)
  by Rune Madsen
- Design an ice cream cone. A few rules about your code: You can only use black
  (0) and white (255). You are only allowed to use triangle(), rect() and
  ellipse() once each, and no other drawing functions are allowed (no beginShape
  or images). Bring to class a design of an ice cream cone. Yes, an ice cream
  cone.

## Week 2: Form 1

> Without aesthetic, design is either the humdrum repetition of familiar cliches
> or a wild scramble for novelty. Without the aesthetic, the computer is but a
> mindless speed machine, producing effects without substance. Form without
> relevant content, or content without meaningful form.
>
> _Paul Rand_

This week we'll take our first step into design theory by looking at basic
shapes. We'll talk about techniques for creating shapes in P5.js, look at
examples from the history of graphic design, and introduce basic ways of using
randomization and repetition.

### Class Overview

- Homework presentations
- Introduction to JavaScript and P5.js
- Lecture: Basic shapes and relationships

### Assignment for next week

- TBD
- Read
  [Paul Rand - Conversations with Students](http://assets.runemadsen.com/rand_conversations.pdf)

## Week 3: Form 2

This week we'll look at more complex shapes, and how you can use algorithms to
generate a multitude of expressions.

### Class Overview

- Homework presentations
- Lecture: Complex shapes

### Assignment for next week

- TBD
- Read [Form + Content](http://assets.runemadsen.com/rand_form_content.pdf) by
  Paul Rand (Design, Form and Chaos)

## Week 4: Color

In this class we'll dive into color theory and look at color handling in
Processing. We'll talk about the history of color, the difference between RGB
and HSB, and investigate how to generate color schemes in code.

- Homework design critique
- Lecture: Computational Color

### Assignment for next week

- TBD

## Week 5: Typography

> To create a typeface that is easily malleable in the computational medium, the
> constituent shapes must be reduced to compact numerical forms.
>
> _John Maeda_

This week we'll look at typography. We'll go through the basic unit measurement
that make up a typeface, and how we can manipulate these in P5.js.

### Class Overview

- Homework presentations
- Lecture: Computational Typography
- Design exercise: Divide into groups of 3 and come up with 2 algorithmic font
  systems

### Assignment for next week

- This week you're going to design a typeface based on the meaning of a word.
  Pick a word and make a typeface around it. The important thing is that you
  draw the letters using some kind of rule-based logic. Look at the examples I
  showed in class, and try to come up with your own typeface system - even if
  it's very simple. Your goal is to convince me that you can make a typeface
  that is better constructed in code than in Illustrator.

## Week 6: Grid Systems

> A grid system is not just a set of rules to follow... but it's also a set of
> rules to play off of–to break, even. Given the right grid – the right system
> of constraints – very good designers can create solutions that are both
> orderly and unexpected.
>
> _Khoi Vinh, New York Times_

In this class we'll look at grid systems and how to use them as guiding
constraints for your designs. We'll go through different types of grids,
implement these in code, and see how it translates to the world of computational
design.

### Class Overview

- Homework design critique
- Lecture: Computational Grid Systems

### Assignment for next week

For next week you'll design a cover for a book of your choice. You can use form,
color and typography, but not images. The main constraint is that you need to
use a grid system to place elements on the page.

The most important thing is that you think in systems. What happens if you
randomize the grid? What happens when you rotate it? What happens when you
overlay multiple grids? Come up with an idea first, and then implement it step
by step. Think about all the things we've learned and bring to class a simple
design your book cover.

## Week 7: Logo

To make a well-designed logo requires skills in form, color, type and grid.
We'll look at everything from traditional logos to organic, computational logos,
and we'll go through different techniques for making generative logos in
Processing. This week's assignment is a 1 week midterm project.

### Class Overview

- Homework design critique
- Lecture: Dynamic Logos

### Assignment for next week

For next week write a sketch that outputs a logo for a specific entity, that
being a person, group, company, etc. If in doubt, design a logo for IMA. The
logo needs to be a dynamic design system. This doesn't mean that it needs to be
completely random every time you run the sketch, but it needs to be able to have
a range of expressions that can easily be tweaked by changing the variables in
the sketch.

Bring to class a design with the same logo show in 3 different variations. For
example, if you're designing a logo for IMA, you could have a variation for IMA,
one for the IMA Show, etc. Or you could a different logo for 3 different IMA
show years. These would all look different, but be the output of the same code.
Think about form, color, typography and grids before you start coding, and make
a strategy. Think. Keep it simple. You only have one week. This is a great time
to find something in the real world that needs a redesign (your friends' band, a
festival, etc.

## Week 8: _Midterm Presentations_

This week will be midterm presentations.

### Assignment for next week

- Read [Hackers and Painters](http://www.paulgraham.com/hp.html) by Paul Graham
- Read
  [Design and the Play Instinct](http://www.reocities.com/paciunia/paulrandsbook.pdf)
  by Paul Rand.

## Week 9: Randomization

Randomization is about letting the computer choose for us. This week we'll look
at ways to create programs that create unique graphics. We'll look at basic
randomness, Perlin noise, and how a simple thing like randomness can help you
create unexpected things.

### Class Overview

- Reading discussion
- Lecture: Randomization
- Solving the homework: Code walkthrough

### Assignment for next week

For next week pick an existing piece of visual art (painting, ad, etc) that uses
randomization as a key design principle, and recreate it in code. If in doubt,
get inspired by
[some of these famous Olivetti posters](http://www.giovannipintoriresearch.com/design-archive/).
You should use at least some randomization concepts from this week's lecture in
your sketch, in order to make the sketch dynamic. This means that it needs to
look different every time it runs, but still have the visual style of the
original work. Come to class prepared to show your design + to share how your
sketch uses randomization. I'm looking for the simplest possible implementation,
which means that it's up to you to set goals that are simple enough for you have
time to code the assignment.

## Week 10: Repetition

Repetition is highly computational, still human beings have created patterns as
long as we have known creative expression. In this class we'll focus on the use
of patterns in graphic design, and look at different repetition techniques and
ways of creating custom patterns.

### Class Overview

- Lecture: Computational Repetition
- Quick thoughts on final project

### Assignment for next week

From now on and until the end of the semester, we will be working on final
projects. For next week, pick a real-world design problem that you will tackle
for your final. This can be an event poster, an album cover, a logo re-design, a
full company identity, a book cover, or something else completely. It's all up
to you, and there are no constraints. Make a short presentation about your final
project that speaks to:

- What is the content you're designing? (e.g. "I'm redesigning the logo for
  Bronx Zoo")
- What is the intended form of your project? (e.g. "It will be a generative logo
  that can fit each animal")
- Why is this done in code?

The presentation can only have 3 slides, with answers to these questions. You do
not need to actually code or design anything. Remember, you cannot change your
final project once you've given this presentation.

## Week 11: Transformation

How can we manipulate pixels in code? Can we still preserve meaning while
creating beauty with algorithms? This week we'll look at different techniques
for manipulating pixel arrays. We will look at examples of transformation in
graphic design even before the computer, compare these to recent examples of
transformation in graphic design products, and go through different image filter
algorithms.

### Class Overview

- Final proposals
- Lecture: Pixel iteration and manipulation

### Assignment for next week

For next week, I want you to approach your final as a one-week project. Come to
class with a design that implements your final idea, and be ready to discuss
what works or doesn't work in your implementation.

## Week 12: Motion

Can a still image have movement? In this class we'll experiment with animation
and movement in graphic design. We'll see what happens when we introduce physics
in our graphic designs. Like a photograph is a snapshot of a moving world, so
too can a desgins be a snapshot of a moving virtual world.

### Class Overview

- Lecture: Computational Motionand Animation
- Work on final projects. I'll meet with each of you individually to talk
  through your project.

### Assignment for next week

Finals!

## Week 13: Work on finals

Today we'll just be working on finals.

## Week 14: _Final Presentations_

I will invite critics from the design, coding, and curating world, and you will
each do a 6-8 minute presentation, followed by a short discussion.

## Recommended Readings

These books might come in handy before, during or after the semester. You will
not need to purchase or read these, but all of them are highly recommended
reading.

- [Generative Design: Visualize, Program, and Create with Processing](http://amzn.to/Numea0)
  is one of the few recent books about algorithmic graphic art. It's pricey but
  really worth the money.
- [Creative Code by John Maeda](http://amzn.to/KspHn9)
- [Hackers and Painters by Paul Graham](http://amzn.to/AdZl6) is a great
  collection of essays revolving around the concept of the programmer as an
  artist. Many of the essays are available [on this website](http://bit.ly/1vUe)
- [Design by Numbers by John Maeda](http://bit.ly/MemEdj)
- [Designing Programmes by Karl Gerstner](http://amzn.to/K97iqQ)
- [Design, Form and Chaos by Paul Rand](http://bit.ly/KIgUdr)
- [A Designer's Art by Paul Rand](http://bit.ly/Lbq1Gl)
- [Type + Code by Yeohyun Ahn](http://bit.ly/NEFjFk) is a book from 2012 aiming
  to introduce Processing to designers.
- [Form + Code by Casey Reas, etc](http://formandcode.com/)
- [Dot Dot Dot Magazine](http://www.dot-dot-dot.us/) has some of the best new
  literature about the intersection of design and technology. It is no longer
  printed.
- [Bulletins of the Serving Library](http://www.servinglibrary.org/) is the new
  magazine that the DDD creators has started.
- [Elements of Typographic Style by Robert Bringhurst](http://amzn.to/17cWk9)
  Want to know about typefaces? This is the book.
- [The Interaction of Color by Josef Albers](http://amzn.to/NGs4R2). Want to
  know about color? This is the book.
- [A Little-Known Story About a Movement, a Magazine, and the Computer's Arrival in Art: New Tendencies and Bit International](http://mitpress.mit.edu/books/little-known-story-about-movement-magazine-and-computer%E2%80%99s-arrival-art)
- [Dynamic Identities in Cultural and Public Contexts](http://www.amazon.com/Dynamic-Identities-Cultural-Public-Context/dp/3037781637)

## Recommended Websites

- [Rules Based](http://rulesbased.wordpress.com)
- [Typeworship](http://typeworship.com)
- [Type Code](http://www.issuu.com/jpagecorrigan/docs/type-code_yeohyun-ahn)
- [Brand New](http://www.underconsideration.com/brandnew)
- [mlkshk geometric](http://mlkshk.com/geometric)
- [Subtraction: Grids are Good](http://www.subtraction.com/pics/0703/grids_are_good.pdf)
- [Smashing Magazine: Lessons from Swiss Style Graphic Design](http://www.smashingmagazine.com/2009/07/17/lessons-from-swiss-style-graphic-design/)
- [Relational Design](http://nevolution.typepad.com/theories/2011/03/a-relational-design-process-thesis.html)
- [Colour Lovers](http://www.colourlovers.com)
- [Geometry Daily](http://geometrydaily.tumblr.com/)
- [Random Number](http://randomnumber.nu/)
- [Computer Kunst](http://www.computerkunst.org/)

## Studios / People

- [Sagmeister & Walsh](http://www.sagmeisterwalsh.com/)
- [Stefanie Posavec](http://www.itsbeenreal.co.uk/)
- [Onformative - Germany](http://www.onformative.com/)
- [E. Roon Kang](http://www.eroonkang.com/)
- [Laboratoire ORB](http://www.labo-irb.eu/)
- [JR Schmidt](http://cargocollective.com/jrschmidt/)
- [Alessandro Capozzo](http://www.abstract-codex.net/membranae/index.html)
- [Tim Reynolds](http://butdoesitfloat.com/It-is-easy-to-imagine-fantasy-as-physical-and-myth-as-real-We-do-it)
- [Adam Harvey](ahprojects.com)
