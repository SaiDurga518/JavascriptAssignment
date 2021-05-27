function removehtmltag(str)
{
   if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();
  return str.replace(/<[^>]*>/g, '');
}

console.log(removehtmltag('<p><strong><em>SkillSanta Assignments</em></strong></p>'));
document.write(removehtmltag('<p><strong><em>SkillSanta Assignments</em></strong></p>'));
