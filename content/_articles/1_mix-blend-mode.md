---
title: 'How to remove the background of an image in pure CSS? Mind-blowing trick!'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
thumbnail: '/assets/articles/1/thumbnail.png'
date: '02-04-2023'
category: 'Web design'
tags: 'CSS'
type: Article
author:
    name: Rafał Rozkowiński
ogImage:
    url: '/assets/blog/hello-world/cover.jpg'
---

# How to remove the background of an image in pure CSS? Mind-blowing trick!

Removing background from graphics can be tedious, am I right? You have to turn on GIMP or Photoshop, then upload the image to the server and hope for the best.

Well, let me tell you that _I know a better technique that will give you the same (or even better!) result directly in the CSS code_. This is especially useful for dynamically generated images or animations.

Below I will explain step by step how this technique works. You will get to know its advantages and limitations, and some tips on how to use it effectively. Do you want to know this trick? Then read on!

## What is the mix-blend-mode property and how does it work?

The CSS mix-blend-mode property specifies _how the content of the container should blend with the parent element's background_. With this graphical property, you can control how elements on the page blend with each other during rendering.

You can apply mix-blend-mode to _any HTML element_, and its value can be one of several predefined blending values that I will discuss in the later part of the article. Each of these values specifies how the element's pixels will blend with the parent's and background's pixels.

I'll give an example now. If you use the value “multiply”, the colors of the element's pixels will be multiplied with the colors of the parent's and background's pixels. This allows you to get a darker effect on the graphic.

On the other hand, with the value “screen” you will get a lighter effect, as the colors of the pixels will be blended with the color of the background.

## How to remove graphic’s background with mix-blend-mode property?

To ensure the proper functioning of the mix-blend-mode property, several requirements must be met by the edited image:

-   The image's background _must be light and uniform_.
-   The page's background _must be darker than the image's background_.
-   The image's colors _must not be brighter than the page's background_.

If you have the appropriate image, you can start working with it.
For this article, I have prepared an example product photo:

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="dyqjxVR" data-editable="true" data-user="Ravcior" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Ravcior/pen/dyqjxVR">
  mix-blend-mode</a> by Ravcio (<a href="https://codepen.io/Ravcior">@Ravcior</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Which property will work best in your situation? It depends on two factors: the color of your web pages and the colors used in the edited graphic.

## How do individual mix-blend-mode values work?

I will now briefly discuss all the possible values for the mix-blend-mode property.

-   _“Darker”_ – This value will _darken the pixels of the element's content_. Pixels that are lighter than the background of the graphic will be darkened to the level of the page background. All darker pixels will remain unchanged.
-   _“Multiply”_ – this value _multiplies colors of the element’s and background’s pixels_. As a result, you will get colors darker than the initial ones. The brighter the pixels of the graphics, the more they will affect the result. “Multiply” works great for creating a shadow effect.
-   _“Lighter”_ – _brightens the colors of the pixels of the element and the background, and then adds them together_. This will give you brighter colors than the initial ones. The darker the pixels, the less they will modify the result. You will use this value to create light effects or transparencies.
-   _“Screen”_ – _reverses the colors of the element and the background, and then adds them together_. This allows you to get a result of brighter colors. It is worth using this value to create a brightening effect.
-   _“Overlay”_ – _combines the effects of “multiply” and “screen”_. As a result, light pixels will be darker than the original, and dark ones will be brighter. This solution works well for creating text effects with a shadow or for adding dimming layers.
-   _“Hard-light”_ – this value causes _the opposite effect of “overlay”_. Bright background pixels become even brighter, and originally dark ones become even darker. With it, you can easily create a metallic effect or an imitation of neon lighting.
-   _“Soft-light”_ – causes a _similar effect to “hard-light”, but less intense_. Initially, bright background pixels are slightly brighter, and dark ones are only slightly darker. This value is best for creating blur effects or smooth color transitions.
-   _“Difference”_ – _subtracts the colors of the graphic pixels from the background pixels or vice versa_. As a result, you will get darker colors in the image and brighter than the background pixels. This value will be useful for detecting differences in colors between two images or for creating negative effects.
-   _“Exclusion”_ – _works on a similar principle as “difference”, but with less intensity_. You can successfully use it to create blur effects or reduce contrast.
    Every of the mentioned mix-blend-mode properties will streamline your work when it comes to graphic design and help you achieve a variety of cool visual effects.

## Other creative ways to use mix-blend-mode

The technique of removing the background with mix-blend-mode is very useful. However, its applications do not end there.
I also recommend using the “overlay” value to create a _textured effect on text_. You can find the code and result below:

```css
div {
    background: url('texture.jpg');
}

p {
    mix-blend-mode: overlay;
}
```

[screen1/html]
Furthermore, you can achieve _transparency on the color similarly_:

Mix-blend-mode provides many more possibilities. I encourage you to explore all the values and experiment on your own!

## Important tip about web browsers

The CSS mix-blend-mode property is generally well-supported by modern web browsers. As a CSS3 property introduced in 2015, it is typically handled without issue by most new browsers. However, it's worth noting that _in older browsers or their versions, mix-blend-mode may not work correctly_ or may not work at all. In such cases, I recommend you to use alternative solutions or fallback to simpler design techniques.

Furthermore, not all mix-blend-mode effects are universally supported by all browsers, including “exclusion” or “hard-light”. Therefore, it's important to thoroughly _test your projects_ in different browsers and their various versions to ensure that everything works as intended.

## Troubleshooting

A final tip: if you're using mix-blend-mode, there may be situations where you don't want all elements to be affected by it. In such cases, you can use the [LINK] CSS isolation property to limit the scope of the blending effect.

## Mix-blend-mode is a powerful tool, but be aware of browser support

The CSS mix-blend-mode property is a _powerful tool_ that allows you to create interesting graphical effects without using specialized software. With it, you can quickly remove backgrounds from photos, layer elements on top of each other, or experiment with color mixing.

However, not all browsers support all mix-blend-mode effects. So, it's important to _test your projects_ in different browsers and versions to ensure everything works properly.

_Despite this minor inconvenience_, mix-blend-mode is still an outstanding tool. It can be used not only in web design but also in other fields such as digital graphics or animation. Use it in your projects to give them a unique character!
