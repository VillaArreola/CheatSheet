// Tipos
export interface Example {
  command: string;
  description: string;
}

export interface Parameter {
  flag: string;
  description: string;
}

export interface Command {
  id: string;
  name: string;
  syntax: string;
  description: string;
  category: string;
  color: string;
  isDangerous: boolean;
  examples: Example[];
  parameters: Parameter[];
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  color: string;
  count: number;
}

// Datos
export const categories: Category[] = [
  { id: 'all', name: 'Todos los comandos', color: 'gray', count: 25 },
  { id: 'linux', name: 'Linux Basics', color: 'blue', count: 8 },
  { id: 'text', name: 'Text Processing', color: 'green', count: 6 },
  { id: 'files', name: 'File Search', color: 'purple', count: 5 },
  { id: 'network', name: 'Networking', color: 'indigo', count: 4 },
  { id: 'security', name: 'Security', color: 'red', count: 2 }
];

export const commands: Command[] = [
  {
    id: 'ls',
    name: 'ls -la',
    syntax: 'ls [options] [directory]',
    description: 'Lista archivos y directorios con detalles completos',
    category: 'linux',
    color: 'blue',
    isDangerous: false,
    examples: [
      {
        command: 'ls -l',
        description: 'Lista detallada con permisos y tamaños'
      },
      {
        command: 'ls -a',
        description: 'Muestra archivos ocultos'
      },
      {
        command: 'ls -R',
        description: 'Lista recursiva de directorios'
      }
    ],
    parameters: [
      {
        flag: '-l',
        description: 'Formato largo, muestra detalles'
      },
      {
        flag: '-a',
        description: 'Muestra archivos ocultos'
      },
      {
        flag: '-h',
        description: 'Tamaños legibles (1K, 234M, 2G)'
      },
      {
        flag: '-R',
        description: 'Recursivo, incluye subdirectorios'
      }
    ],
    tags: ['Linux', 'Filesystem', 'basic']
  },
  {
    id: 'chmod',
    name: 'chmod 755',
    syntax: 'chmod [permissions] [file/directory]',
    description: 'Cambia permisos de archivos y directorios',
    category: 'linux',
    color: 'orange',
    isDangerous: true,
    examples: [
      {
        command: 'chmod 755 file.txt',
        description: 'Da permisos de lectura/escritura al dueño, lectura a otros'
      },
      {
        command: 'chmod +x script.sh',
        description: 'Hace ejecutable un archivo'
      }
    ],
    parameters: [
      {
        flag: '755',
        description: 'rwxr-xr-x (dueño: todo, otros: leer/ejecutar)'
      },
      {
        flag: '+x',
        description: 'Agrega permiso de ejecución'
      }
    ],
    tags: ['Linux', 'permissions', 'security']
  },
  {
    id: 'grep',
    name: 'grep',
    syntax: 'grep [options] pattern [file]',
    description: 'Busca patrones en archivos de texto',
    category: 'text',
    color: 'green',
    isDangerous: false,
    examples: [
      {
        command: 'grep "error" log.txt',
        description: 'Busca la palabra "error" en log.txt'
      },
      {
        command: 'grep -i "warning" *.log',
        description: 'Busca "warning" ignorando mayúsculas en todos los .log'
      }
    ],
    parameters: [
      {
        flag: '-i',
        description: 'Ignora mayúsculas/minúsculas'
      },
      {
        flag: '-r',
        description: 'Búsqueda recursiva en directorios'
      }
    ],
    tags: ['Text', 'search', 'regex']
  },
  {
    id: 'find',
    name: 'find',
    syntax: 'find [path] [expression]',
    description: 'Busca archivos y directorios',
    category: 'files',
    color: 'purple',
    isDangerous: false,
    examples: [
      {
        command: 'find . -name "*.js"',
        description: 'Busca archivos .js en directorio actual'
      },
      {
        command: 'find /home -type d',
        description: 'Lista solo directorios en /home'
      }
    ],
    parameters: [
      {
        flag: '-name',
        description: 'Busca por nombre de archivo'
      },
      {
        flag: '-type',
        description: 'Filtra por tipo (f:archivo, d:directorio)'
      }
    ],
    tags: ['Files', 'search', 'filesystem']
  },
  {
    id: 'ssh',
    name: 'ssh',
    syntax: 'ssh [options] user@host',
    description: 'Secure Shell - conexión remota segura',
    category: 'network',
    color: 'indigo',
    isDangerous: false,
    examples: [
      {
        command: 'ssh user@server.com',
        description: 'Conecta a server.com como user'
      },
      {
        command: 'ssh -p 2222 admin@10.0.0.1',
        description: 'Conecta al puerto 2222'
      }
    ],
    parameters: [
      {
        flag: '-p',
        description: 'Especifica puerto'
      },
      {
        flag: '-i',
        description: 'Usa archivo de clave privada'
      }
    ],
    tags: ['Network', 'remote', 'security']
  }
];

// Helpers
export function getCommandsByCategory(category: string): Command[] {
  if (category === 'all') return commands;
  return commands.filter(cmd => cmd.category === category);
}

export function getCommandById(id: string): Command | undefined {
  return commands.find(cmd => cmd.id === id);
}

export function getPopularCommands(limit: number = 3): Command[] {
  return commands.slice(0, limit);
}
