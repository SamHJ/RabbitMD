<template>
    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g :filter="$store.state.darkTheme?'':'url(#filter0_d)'">
    <rect x="10" y="5" width="45" height="45" rx="5" :fill="$store.state.darkTheme?'#030108':'white'"/>
    </g>
    <path d="M24 27H42" stroke="#0073C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 21H42" stroke="#0073C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 33H42" stroke="#0073C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <filter id="filter0_d" x="0" y="0" width="65" height="65" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
    <feOffset dy="5"/>
    <feGaussianBlur stdDeviation="5"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.45098 0 0 0 0 0.780392 0 0 0 0.15 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
    </defs>
    </svg>
</template>