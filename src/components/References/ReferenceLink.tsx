import React from 'react';

interface ReferenceLinkProps {
  href: string;
  title: string;
  type: 'research' | 'expert' | 'case-study';
}

export function ReferenceLink({ href, title, type }: ReferenceLinkProps) {
  const typeIcons = {
    'research': '📚',
    'expert': '👨‍🏫',
    'case-study': '💡'
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 underline"
    >
      <span>{typeIcons[type]}</span>
      <span>{title}</span>
    </a>
  );
}