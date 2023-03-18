Q1 const countCharacters = (S) => 
{
    const arr=[0,0]
  
    for(let i=0; i<S.length; i++)
    {
      if(S.charCodeAt(i)===65){
      arr[0]+=1
      }
     else if(S.charCodeAt(i)===68){
      arr[1]+=1
      }
    }
    return arr
};

Q2 var Count_Occ = (s) => 
{
    const arr=[]
       for(let i=0; i<s.length; i++)
       {
         arr.push(s.charAt(i))
       }
       
       const repetive = arr.filter((alphabet) => arr.indexOf(alphabet)!== arr.lastIndexOf(alphabet))
      // console.log
      repetive.sort(repetive)
      // console.log(repetive)
      
      let str=''
      let count=1;
      for(let i=0; i<repetive.length; i++)
      {
        if(repetive[i]===repetive[i+1])
        {
          count+=1
        }
        else{
        str+=repetive[i]+count
        count=1
        }
      }
      return str
};

Q3 var Count_Vowels= (S) => 
{
  let vowels = 0;
  for(let i=0;i< S.length;i++){
  if(S[i].toLowerCase()==='a'||S[i].toLowerCase()==='e'||S[i].toLowerCase()==='i'||S[i].toLowerCase()==='o'||S[i].toLowerCase()==='u'){
  vowels += 1;
  }
}
return vowels;    
};

Q4 var Concatenate_Strings = (S1, S2) => 
{
    let concat= S1.concat(S2)
    return concat
};

Q5 const findLength = (S) => 
{
  return S.length;  
};

Q6 var Game_Winner = (S) => 
{
  let Aditya = 0
    let Danish = 0
  for(let i=0; i<S.length; i++)
  {
    if(S[i]==="A")
    {
       Aditya += 1;
    }
   if(S[i]==="D")
    {
      Danish +=1
    }
  }
    if(Aditya>Danish){
      return "Aditya"
    }
    else if(Danish>Aditya)
    {
      return "Danish"
    }
    else
    return "Draw"
  
}

Q7 const joinStrings = (S, P) => 
{
  return S+P
    
};

Q8 var Palin_Check = (str) =>
{
  
  let len = str.length
  for(let i=0; i< parseInt(len/2); i++){
    if(str[i]!==str[str.length-1-i]){
      return "False"
    }
  
    else
    return "True"
  }
}

Q9 var Reverse_String = (str) => 
{
   let rev = ""
   for(let i=str.length-1; i>=0; i--)
   {
     rev = rev+str.charAt(i)
   }
   return rev
};

Q10 var String_Match = (S1,S2) => 
{
  if(S1===S2){
    return "YES"
  }
  else
  return "NO"
};

Q11 var Replace = (S, pattern , text) => 
{
  let repl = ""
      let index = S.search(pattern);
      for(let i=0;i< index;i++){
        repl += S[i]
        
    }
     repl += text;
    for(let i=index+pattern.length; i<S.length; i++){
      repl += S[i]
    }
       
        return repl    
};

Q12 var Split_the_string = (S) => 
{
  return S.split(' ')
        
};

Q13 var Count_Vowels= (S) => 
{ let count=0
      for(let i=0; i<S.length; i++)
      {
        if(S.charAt(i).toLowerCase()==='a' || S.charAt(i).toLowerCase()==='e' || S.charAt(i).toLowerCase()==='i' || S.charAt(i).toLowerCase()==='o' || S.charAt(i).toLowerCase()==='u')
        {
          count++
        }
      }
      return count
};
var Count_Consonants= (S) => 
{
       return S.length-Count_Vowels(S)
  
};