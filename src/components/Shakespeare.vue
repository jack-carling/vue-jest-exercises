<template>
  <div>
    <span id="insult">{{ text }}</span>
    <button @click="randomInsult">Random</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'insult me!',
      insults: [
        {
          insult:
            'Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?',
          play: 'Macbeth',
        },
        {
          insult: 'Never hung poison on a fouler toad',
          play: 'Rickard III',
        },
        {
          insult: 'He thinks too much: such men are dangerous.',
          play: 'Julius Ceasar',
        },
        {
          insult: 'Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs.',
          play: 'The Merchant of Venice',
        },
        {
          insult: 'Give me your hand...I can tell your fortune. You are a fool.',
          play: 'The Two Noble Kinsmen',
        },
        {
          insult:
            'He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish!',
          play: 'The Tempest',
        },
        {
          insult: 'It is a tale Told by an idiot, full of sound and fury, Signifying nothing.',
          play: 'Macbeth',
        },
        {
          insult: 'Alas, poor heart, that kiss is comfortless As frozen water to a starved snake',
          play: 'Titus Andronicus',
        },
        {
          insult: 'He hath eaten me out of house and home; he hath put all substance into that fat belly of his.',
          play: 'Henry IV, Part 2',
        },
        {
          insult: 'Out, you green-sickness carrion! Out, you baggage! You tallow-face!',
          play: 'Romeo and Juliet',
        },
      ],
    };
  },
  methods: {
    async randomInsult() {
      this.text = this.insults[Math.floor(Math.random() * this.insults.length)].insult;
    },
  },
};
</script>

<style></style>
