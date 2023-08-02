<template>
  <div class="my-[50px]">
    <BaseHeader text="FAQ" />
    <Accordion :tabs="accordionTabs" />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Shopy - faq',
})

const accordionTabs = [
  {
    title: 'What is your return policy?',
    ariaTitle: 'What is your return policy?',
    tabText:
      'We have a hassle-free 30-day return policy. If you are not completely satisfied with your purchase, you can return it within 30 days from the delivery date for a full refund or exchange. Please ensure the items are in their original condition with all tags attached.',
  },
  {
    title: 'How can I track my order?',
    ariaTitle: 'How can I track my order?',
    tabText:
      'Once your order is shipped, you will receive an email with a tracking number. You can use this tracking number to monitor the status of your package and its estimated delivery date.',
  },
  {
    title: 'What payment methods do you accept?',
    ariaTitle: 'What payment methods do you accept?',
    tabText:
      'We accept various payment methods, including credit/debit cards (Visa, MasterCard, American Express), PayPal, and other secure online payment options. Your payment information is always protected and encrypted for security.',
  },
  {
    title: 'Do you offer international shipping?',
    ariaTitle: 'Do you offer international shipping?',
    tabText:
      'Yes, we offer international shipping to many countries. During the checkout process, you can select your country to see if we deliver to your location and view the shipping fees.',
  },
  {
    title: 'How long does shipping take?',
    ariaTitle: 'How long does shipping take?',
    tabText:
      'The delivery time depends on your location and the shipping method chosen during checkout. Standard shipping usually takes between 5 to 10 business days, while express shipping can take 2 to 5 business days.',
  },
  {
    title: 'Are there any shipping fees?',
    ariaTitle: 'Are there any shipping fees?',
    tabText:
      'Yes, shipping fees vary depending on your location, selected shipping method, and order total. During the checkout process, you will be able to view the shipping costs before finalizing your purchase.',
  },

  {
    title: 'Can I cancel or modify my order after it has been placed?',
    ariaTitle: 'Can I cancel or modify my order after it has been placed?',
    tabText:
      'We process orders promptly to ensure quick delivery, but if you need to cancel or modify an order, please contact our customer support team as soon as possible. We will do our best to accommodate your request if the order has not been shipped.',
  },

  {
    title: 'Do you offer gift wrapping services?',
    ariaTitle: 'Do you offer gift wrapping services?',
    tabText:
      'Yes, we offer gift wrapping services for a small additional fee. During the checkout process, you can choose the gift wrapping option and include a personalized message for the recipient.',
  },

  {
    title: 'What should I do if I receive a damaged or incorrect item?',
    ariaTitle: 'What should I do if I receive a damaged or incorrect item?',
    tabText:
      'We apologize for any inconvenience caused. If you receive a damaged or incorrect item, please contact our customer support team immediately with your order number and a description of the issue. We will arrange a return or exchange and cover all associated costs.',
  },

  {
    title: 'How can I contact customer support?',
    ariaTitle: 'How can I contact customer support?',
    tabText:
      'You can reach our customer support team via email at support@clothingstore.com or by phone at [Customer Support Phone Number]. Our team is available [Days and Hours of Operation] to assist you with any inquiries or concerns.',
  },

  {
    title: 'Do you have a size guide?',
    ariaTitle: 'Do you have a size guide?',
    tabText:
      'Yes, we provide a detailed size guide on each product page to help you find the right fit. If you have any doubts or need additional assistance, feel free to contact our customer support team.',
  },
  {
    title: 'Are your products ethically sourced and environmentally friendly?',
    ariaTitle:
      'Are your products ethically sourced and environmentally friendly?',
    tabText:
      'We are committed to sourcing our products ethically and promoting sustainable practices. We work with suppliers who adhere to ethical and environmental standards, and we continuously strive to improve our sustainability efforts.',
  },
  {
    title: 'Do you offer discounts or promotions?',
    ariaTitle: 'Do you offer discounts or promotions?',
    tabText:
      'Yes, we regularly offer discounts and promotions. To stay updated on our latest deals, sign up for our newsletter or follow us on social media.',
  },
  {
    title: 'Can I use multiple discount codes on a single order?',
    ariaTitle: 'Can I use multiple discount codes on a single order?',
    tabText:
      'Unfortunately, only one discount code can be applied per order. Choose the one that offers the best value for your purchase.',
  },
  {
    title: 'Do you have a loyalty program?',
    ariaTitle: 'Do you have a loyalty program?',
    tabText:
      'Yes, we have a loyalty program for our valued customers. You can earn points for every purchase and redeem them for exclusive rewards and discounts.',
  },
]
</script>

<style scoped></style>
