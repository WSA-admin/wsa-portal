interface CodeBlockProps {
  children: string;
  language?: 'bash' | 'javascript' | 'typescript' | 'python' | 'json' | 'text' | 'structure' | 'sql';
  title?: string;
  variant?: 'default' | 'compact' | 'inline';
  className?: string;
}

export default function CodeBlock({ 
  children, 
  language = 'text',
  title,
  variant = 'default',
  className = '' 
}: CodeBlockProps) {
  
  // Language-specific styling with better contrast
  const languageClasses = {
    bash: 'text-green-300',
    javascript: 'text-yellow-200',
    typescript: 'text-blue-200', 
    python: 'text-emerald-200',
    sql: 'text-cyan-200',
    json: 'text-purple-200',
    text: 'text-gray-100',
    structure: 'text-green-300'
  };

  // Variant-specific styling
  const variantClasses = {
    default: 'bg-gray-900 p-4 sm:p-6 rounded-lg w-full',
    compact: 'bg-gray-800 p-3 sm:p-4 rounded w-full',
    inline: 'bg-gray-100 px-2 py-1 rounded text-gray-800 font-mono text-sm'
  };

  // Responsive text sizing
  const textSizes = {
    default: 'text-xs sm:text-sm',
    compact: 'text-xs',
    inline: 'text-sm'
  };

  if (variant === 'inline') {
    return (
      <code className={`${variantClasses.inline} ${className}`}>
        {children}
      </code>
    );
  }

  return (
    <div className={`${variantClasses[variant]} overflow-hidden ${className}`}>
      {title && (
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-700">
          <h4 className="text-gray-300 font-medium text-sm sm:text-base">{title}</h4>
          <span className="text-xs text-gray-500 uppercase">{language}</span>
        </div>
      )}
      <div className="overflow-x-auto">
        <pre className={`font-mono ${textSizes[variant]} ${languageClasses[language]} leading-relaxed whitespace-pre-wrap break-words sm:whitespace-pre sm:break-normal min-w-0`}>
          {children}
        </pre>
      </div>
    </div>
  );
}