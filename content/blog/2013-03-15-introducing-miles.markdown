title: Introducing... Miles
date: 2013-03-15
category: blog
type: blog-post
---

<figure>
    <img src="/media/images/blog/Miles_Davis_by_Palumbo.jpg" alt="Miles Davis">
    <figcaption>Photo: Miles Davis by <a href="http://www.flickr.com/people/tompalumbo">Tom Palumbo</a></figcaption>
</figure>

Over the next couple of weeks I'll be running through a few of the libraries which will form the basis of the first Spectacle Labs board, and giving some quick examples of how they work.  First up is [Miles](https://github.com/spectaclelabs/miles), the smallest and most complete library in the Spectacle arsenal.

### What is it?

[Miles](https://github.com/spectaclelabs/miles) is a C++11 library for representing musical scales and tunings.  One of the most common tasks when creating music on a computer is constraining the notes you play to a certain scale, and working within a fixed tuning system.  As part of this you need to work out what pitch the notes should represent.  Sounds simple?  Well, lets look at a seemingly straightforward problem.

### What pitch is middle C?

Middle C (C<sub>4</sub> for the [scientists](http://en.wikipedia.org/wiki/Scientific_pitch_notation) amongst you) is the fourth C note on a standard 88 key piano.  Imagine we start a two-piece piano and electronics band.  When you play middle C on your piano and I play it on my computer we want to both be playing the same pitch, otherwise we will sound like a chorus of cats...

<div class="video-container">
    <iframe width="560" height="315" src="http://www.youtube-nocookie.com/embed/cHfBQCJaJoI?rel=0" frameborder="0" allowfullscreen></iframe>
</div>

But, which pitch should we both be playing?  First we have to settle on a base pitch to work from.  A common standard is to use the A above middle C as a fixed reference point.  In the UK, most orchestras define this note to be at 440Hz (the [A440 pitch standard](http://en.wikipedia.org/wiki/A440_%28pitch_standard%29)), but in the US and continental Europe 442 or 443Hz is often used.

Once we have decided on a base pitch, we then have to agree on a tuning to use.  In most western music [equal temperament tuning](http://en.wikipedia.org/wiki/Equal_temperament) is used, but non-western music often uses its own mathematically defined tuning systems.  These change the relationship between our reference note A and middle C, meaning there are an even wider range of pitches we could be playing.

As you can see, our simple problem of playing a middle C has become increasingly difficult.  Our newly formed band could be splitting up over "musical differences" before we've even played a note.

### Enter Miles

Miles solves these problems for you by allowing you to specify which scale, tuning and reference pitch to use when working out which pitch to play.  The following simple program prints the A major scale from our A440 reference pitch up to A<sub>5</sub>, one octave higher.

```cpp
#include <iostream>

#include "miles.h"

using namespace miles;

// Create a major scale
Scale scale = MajorScale();

// Our reference frequency, used as the base frequency of our scale
float A440 = 440.0f;

int main() {
    // Print the A major scale from A440 up to A5
    for (uint32_t i=0; i<8; i++) {
        std::cout << scale.getFrequency(i, A440, 0) << std::endl;
    }
}
```

If we want to play in a different tuning then we can simply change the scale; for example `Scale scale = MajorScale(JustTuning());` would play our scale using [Just intonation](http://en.wikipedia.org/wiki/Just_intonation).  Miles has a number of standard scales and tunings built-in, and it is simple to add new custom scales and tunings.

There are more examples and further documentation available on [GitHub](https://github.com/spectaclelabs/miles), and please report any problems or bugs you find on the [issue tracker](https://github.com/spectaclelabs/miles/issues).  Hopefully Miles will help to solve your tuning issues and will ensure that your relationship with other musicians is as harmonious as possible.




