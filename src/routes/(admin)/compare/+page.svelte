<svelte:head>
	<title>Compare</title>
	<meta name="description" content="Comparetext module" />
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css">
</svelte:head>

<div class="flex flex-row flex-wrap justify-center w-full bg-gray-200">
  <div class="flex flex-col justify-center p-4 mb-4 drop-shadow-md">
    <form action="/extract" method="POST">
      <label class="w-full" for="text1">Source Text</label>
      <textarea name="text1" id="text1" class="w-full border-solid border-gray-400 border-2 rounded-md" cols="30" rows="10"></textarea>
      <div class="controls">
        <button class="p-2 m-4 bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium">Extract Keywords</button>
      </div>
    </form>
    <div class="results hidden"></div>
  </div>

  <div class="flex flex-col justify-center p-4 mb-4 drop-shadow-md">
    <form action="/rate" method="POST">
      <label class="w-full" for="text2">Comparison Text 2</label>
      <textarea disabled name="text2" id="text2" class="w-full border-solid border-gray-400 border-2 rounded-md" cols="30" rows="10"></textarea>
      <div class="controls">
        <button class="p-2 m-4 bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium">Upload File</button>
      </div>
    </form>
    <div class="results hidden"></div>
  </div>
      
  
</div>
<div class="flex flex-row justify-center">
  <button class="p-2 m-4 bg-purple-800 text-white rounded-md px-3 py-2 text-sm font-medium" type="submit">Compare</button>
</div>