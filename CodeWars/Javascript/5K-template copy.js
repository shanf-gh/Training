/* 
Level: 5 kyu
Link: https://www.codewars.com/kata/514a024011ea4fb54200004b/javascript
*/
function domainName(url){
    domain = url;
    if(domain.includes('//')) {
      domain = domain.slice(domain.indexOf('//') + 2);
    }
    if(domain.includes('www')) {
      domain = domain.slice(4);
    }
    if(domain.includes('.')) {
      domain = domain.slice(0, domain.indexOf('.'));
    }  
    
    return domain;
}

/* Top solutions analysis */
function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};

// clever solution using replace but would fail some subdomains such as images.google.com as it would return images