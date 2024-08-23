document.getElementById('textForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const text = document.getElementById('textInput').value.trim();
    
    if (text === '') {
        alert('Please enter some text.');
        return;
    }
    
    // Clean up text by removing non-word characters and converting to lowercase
    const cleanText = text.replace(/[^\w\s]/g, '').toLowerCase();
    
    // Split text into words
    const words = cleanText.split(/\s+/);
    
    // Filter out common words (you can extend this list as needed)
    const commonWords = new Set([
        'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i', 'it', 'for', 'not', 'on', 'with',
        'he', 'as', 'you', 'do', 'at', 'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she',
        'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what', 'so', 'up', 'out', 'if',
        'about', 'who', 'get', 'which', 'go', 'me', 'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him',
        'know', 'take', 'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them', 'see', 'other',
        'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think', 'also', 'back', 'after', 'use',
        'two', 'how', 'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want', 'because', 'any', 'these',
        'give', 'day', 'most', 'us', 'is', 'are', 'am', 'however', 'visual', 'needed', 'could', 'should','set',
         'been', 'others',' situation', 'Im','I am','might','ought','situation','making', 'between','among','forward',
        'slide', 'has', 'have','do','does','more','much','towards','many','delve','consider', 'within','understanding', 
        'overall','firstly' ,'first','second', 'secondly', 'may','enhance','such','continuous', 'each','required','per',
        'certain','certainly', 'were', 'was', 'do','does', 'does not','he','she','it','we','you','they','there','tell','say',
        'told', 'said', 'made','did', 'those','these', 'that'
    ]);
    
    // Count occurrences of each word
    const wordCount = {};
    words.forEach(word => {
        if (!commonWords.has(word)) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }
    });
    
    // Sort words by frequency
    const sortedWords = Object.keys(wordCount).sort((a, b) => wordCount[b] - wordCount[a]);
    
    // Extract top 15 keywords
    const keywords = sortedWords.slice(0, 15);
    
    // Display the keywords
    displayKeywords(keywords);
});

function displayKeywords(keywords) {
    const keywordDisplay = document.getElementById('keywordDisplay');
    keywordDisplay.innerHTML = '<h3>Keywords:</h3>';
    
    const ul = document.createElement('ul');
    keywords.forEach(keyword => {
        const li = document.createElement('li');
        li.textContent = keyword;
        ul.appendChild(li);
    });
    
    keywordDisplay.appendChild(ul);
}
