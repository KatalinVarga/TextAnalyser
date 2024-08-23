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
        'certain','certainly', 'were', 'was', 'do','does', 'does not','he','she','it','we','you','they','there','tell',
        'say','told', 'said', 'made','did', 'those','these', 'that', 'often', 'some', 'sometimes', 'what', 'where', 'how',
        'who','especially','less', 'more','better', 'thing', 'things', 'lot', 'really', 'thats','let','may','might',
        'about', 'above', 'across', 'after', 'again', 'against', 'all', 'almost', 'alone', 'along', 'already', 'also', 
        'although', 'always', 'among','another', 'any', 'anyone', 'anywhere', 'around', 'as', 'at', 'away', 'back', 
        'be', 'been', 'before', 'being', 'below', 'between', 'both', 'but', 'by', 'came', 'can', 'come', 'could', 'day', 
        'different', 'do', 'does', 'during', 'each', 'either', 'even', 'ever', 'every', 'few', 'for', 'from', 'further',
         'had', 'has', 'have', 'having', 'here', 'him', 'his', 'how', 'however', 'if', 'in', 'into', 'is', 'it', 'its', 
         'just', 'know', 'last', 'let', 'like', 'little', 'long', 'make', 'many', 'may', 'me', 'might', 'more', 'most', 'much',
          'must', 'my', 'myself', 'need', 'new', 'next', 'no', 'not', 'now', 'number', 'off', 'on', 'once', 'one', 'only', 
          'open', 'or', 'other', 'our', 'out', 'over', 'part', 'people', 'place', 'put', 'quite', 'really', 'right', 'same',
           'say', 'see', 'should', 'so', 'some', 'such', 'take', 'than', 'that', 'the', 'their', 'them', 'then', 'there', 'these',
            'they', 'this', 'those', 'through', 'time', 'to', 'too', 'under', 'up', 'use', 'very', 'want', 'was', 'way', 'we', 
            'well', 'were', 'what', 'when', 'where', 'which', 'while', 'with', 'work', 'would', 'year', 'yes', 'yet', 'you', 
            'your', 'yourself', 'above', 'across', 'after', 'against', 'among', 'around', 'before', 'between', 'beyond', 'during',
             'except', 'following', 'including', 'inside', 'instead', 'near', 'next', 'outside', 'past', 'prior', 'since', 'through', 
         'upon', 'without', 'along', 'upon', 'upon', 'while', 'yet', 'unless', 'otherwise', 'plus', 'rather', 'since', 'so', 
         'therefore', 'thus', 'whereas', 'while', 'otherwise', 'wherever','above', 'absolutely', 'accordingly', 'across', 'ad', 
         'adopt', 'adopted', 'affect', 'affects', 'afford', 'again', 'against', 'already', 'alternatively', 'am', 'amongst', 
         'amount', 'and', 'an', 'annually', 'anywhere', 'applied', 'approach', 'are', 'around', 'aspects', 'assess', 'assigned', 'at',
          'attain', 'attained', 'average', 'back', 'beyond', 'by', 'can', 'candidates', 'case', 'certainly', 'compared', 'complete', 
          'completely', 'consider', 'cost', 'cover', 'day', 'deeply', 'despite', 'detailed', 'different', 'discuss', 'done', 'each',
           'effect', 'efficient', 'end', 'establish', 'evenly', 'exactly', 'except', 'few', 'furthermore', 'general', 'given', 
           'goes', 'greater', 'hence', 'however', 'immediate', 'impact', 'implications', 'include', 'individual', 'initially', 
           'involves', 'issue', 'just', 'key', 'less', 'likely', 'limited', 'mainly', 'manage', 'may', 'mean', 'methods', 'moreover',
            'most', 'need', 'normally', 'often', 'on', 'opportunity', 'other', 'outcomes', 'over', 'particular', 'place', 'policy',
             'possible', 'potential', 'predicted', 'present', 'prior', 'process', 'progress', 'prove', 'purpose', 'rather', 'regarding', 
             'relevant', 'result', 'review', 'situation', 'social', 'specific', 'standard', 'studies', 'such', 'therefore', 'though', 
             'under', 'understanding', 'unique', 'useful', 'various', 'view', 'within', 'without', 'yearly','toward', 'under', 'until'

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
