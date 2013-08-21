title: "Babadoo: A Sneak Peek"
date: 2013-08-21
category: blog
type: blog-post
---

After a hard few months working away at hardware, drivers and more drivers, it's probably time to give you a little preview of what all the effort has been for.  So here it is in prototype form - the Babadoo Open-Source Audio DSP Board.

![Babadoo](/media/images/blog/2013-08-21-babadoo.png)

## What is it?

The Babadoo is a small, low-cost, hackable board designed to make getting started with audio synthesis and processing as simple as possible.  The input and outputs are both switchable, allowing you to work with a range of devices, from guitars and amplifiers, to MP3 players and headphones.

![Babadoo Connection Diagram](/media/images/blog/2013-08-21-babadoo_diagram.png)

The Babadoo can be used to create a whole range of awesome digital audio projects, for example you could make:

- Your perfect polyphonic digital synth (with added WubWubWub).
- A crazy glitched-out pitch-shifting delay stompbox.
- An interactive soundscape generator.
- A box to make you sound like a dalek.  Exterminate!

## How do I use it?

It's easy!  To get an app onto the board you simply download a single file, then plug your Babadoo into your computer via a USB cable and you can drag-and-drop the app onto your Babadoo.  You can then unplug your Babadoo, take it to a gig, plug it in (with no laptop required) and play.

If you want to get your hands dirty and start creating your own custom effects and synths then that's also really straightforward.  Alongside the Babadoo we've created a number of C++ libraries designed to make audio synthesis and processing both simple and expressive.  For example to create a reverb effect you will only need to write three lines of code:

```cpp
Babadoo babadoo; // Create a device representing the Babadoo
Reverb reverb; // Create a reverb effect
babadoo >> reverb >> babadoo; // Take the audio input, process it with the reverb, and send it to the output
```

You can then compile your code and upload it to your Babadoo, or share it online so other users can hear your awesome app.

## Where do I get one?

In the next couple of months the Babadoo will be available to pre-order via Kickstarter (where you will be able to see the full specs, and a load more detail about the Babadoo).

If you are a whizz with a soldering iron and have time to help out with beta testing then [drop us a line](mailto:joe@spectaclelabs.org), as there are a couple of unpopulated prototype boards knocking around Spectacle Labs towers which are looking for a good home.  For now though, keep an eye on the blog and our [Twitter feed](http://www.twitter.com/spectaclelabs), as there are a number of videos showing of a little bit of what the Babadoo can do in the offing.

