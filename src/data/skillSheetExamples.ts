import { SkillSheet } from "../types/SkillSheet";

// スキル分析シート例
const skillSheetExamples: SkillSheet[] = [
  {
    engineerName: "K.T",
    jobRequirement: {
      title: "ECサイト開発プロジェクト",
      description: "大手EC企業の新規サービス開発",
      requiredSkills: ["TypeScript", "React", "Next.js", "GraphQL"],
      preferredSkills: ["AWS", "Docker", "CI/CD", "マイクロサービス設計"],
    },
    engineerEvaluation: {
      frontendSkills: [
        {
          name: "TypeScript",
          level: 4,
          comment:
            "型定義を活用した堅牢なコード設計が可能。React/Next.jsとの組み合わせに精通。",
        },
        {
          name: "React",
          level: 5,
          comment:
            "Hooksを活用した実装やReduxでの状態管理設計、パフォーマンス最適化の知見あり。",
        },
        {
          name: "Next.js",
          level: 4,
          comment:
            "SSR/CSR/ISRなど各レンダリング手法の使い分けや最適化経験あり。",
        },
        {
          name: "Tailwind CSS",
          level: 4,
          comment: "効率的なUIコンポーネント設計とレスポンシブ対応の実績あり。",
        },
      ],
      backendSkills: [
        {
          name: "Node.js",
          level: 3,
          comment: "Express/NestJSを用いたRESTful API設計と実装経験あり。",
        },
        {
          name: "GraphQL",
          level: 4,
          comment: "Apollo Serverを使った効率的なAPI設計と開発経験あり。",
        },
        {
          name: "PostgreSQL",
          level: 3,
          comment: "正規化を考慮したDB設計と複雑な集計クエリの実装経験あり。",
        },
      ],
      devOpsSkills: [
        {
          name: "Docker",
          level: 3,
          comment:
            "マルチステージビルドやComposeを使った開発環境構築経験あり。",
        },
        {
          name: "AWS",
          level: 4,
          comment:
            "ECS/Fargate/RDS/S3などを活用したインフラ設計と構築経験あり。",
        },
        {
          name: "GitHub Actions",
          level: 3,
          comment:
            "CI/CDパイプラインの構築と自動デプロイフローの整備経験あり。",
        },
      ],
      softSkills: [
        {
          name: "コミュニケーション",
          level: 4,
          comment:
            "PM・デザイナー・他エンジニアとのスムーズな連携とタスク調整能力あり。",
        },
        {
          name: "プロジェクト管理",
          level: 3,
          comment: "アジャイル/スクラム開発での要件定義と進行管理経験あり。",
        },
      ],
      overallComment:
        "フロントエンド開発を得意としており、TypeScript/React/Next.jsのモダンな技術スタックに精通しています。バックエンドやインフラ構築の経験もあり、サービス全体を見据えた設計が可能です。開発効率とコード品質を両立させるスキルセットを持っています。",
      matchingScore: 92,
    },
  },
  {
    engineerName: "S.M",
    jobRequirement: {
      title: "基幹システム刷新プロジェクト",
      description: "金融機関向け業務システムのリプレイス開発",
      requiredSkills: ["Java", "Spring Boot", "Oracle", "マイクロサービス"],
      preferredSkills: ["Kubernetes", "Terraform", "JUnit", "CI/CD"],
    },
    engineerEvaluation: {
      frontendSkills: [
        {
          name: "JavaScript",
          level: 3,
          comment: "基本的なDOM操作やフレームワークを使ったUI実装経験あり。",
        },
        {
          name: "Vue.js",
          level: 3,
          comment: "コンポーネント設計とVuexによる状態管理の実装経験あり。",
        },
      ],
      backendSkills: [
        {
          name: "Java",
          level: 5,
          comment: "大規模システムでの開発経験があり、設計パターンに精通。",
        },
        {
          name: "Spring Boot",
          level: 5,
          comment:
            "DI/AOP等の概念を理解し、最適なアーキテクチャ設計と実装が可能。",
        },
        {
          name: "Oracle DB",
          level: 4,
          comment: "複雑なテーブル設計やパフォーマンスチューニングの経験豊富。",
        },
        {
          name: "JUnit",
          level: 4,
          comment: "テスト駆動開発を実践し、高品質なコードの実装が可能。",
        },
      ],
      devOpsSkills: [
        {
          name: "Kubernetes",
          level: 3,
          comment:
            "コンテナオーケストレーションによるマイクロサービス構築経験あり。",
        },
        {
          name: "Jenkins",
          level: 4,
          comment: "CIパイプラインの構築とビルド/テスト自動化の経験豊富。",
        },
        {
          name: "Terraform",
          level: 3,
          comment: "IaCによるインフラ構築と環境の冪等性確保の経験あり。",
        },
      ],
      softSkills: [
        {
          name: "要件定義",
          level: 4,
          comment: "顧客との折衝経験があり、業務要件を的確に把握する能力あり。",
        },
        {
          name: "チームリード",
          level: 4,
          comment: "5名程度のチームマネジメントと技術指導の経験あり。",
        },
      ],
      overallComment:
        "基幹システム開発で豊富な経験を持ち、特にJava/Spring Bootを用いたバックエンド開発に強みがあります。セキュリティや堅牢性を考慮した設計能力に優れ、要件定義からリリースまでの一連のプロセスを主導できます。チームリードの経験もあり、プロジェクト全体をけん引する力があります。",
      matchingScore: 95,
    },
  },
  {
    engineerName: "Y.N",
    jobRequirement: {
      title: "SaaSプロダクト開発",
      description: "HR Tech領域のSaaSプロダクト開発",
      requiredSkills: ["Ruby on Rails", "MySQL", "AWS", "React"],
      preferredSkills: ["Redis", "Sidekiq", "Docker", "TDD"],
    },
    engineerEvaluation: {
      frontendSkills: [
        {
          name: "React",
          level: 4,
          comment:
            "SPA開発の実務経験豊富で、Redux/ReactQueryなどの状態管理にも精通。",
        },
        {
          name: "HTML/CSS",
          level: 4,
          comment:
            "セマンティックなマークアップとレスポンシブデザインの実装が得意。",
        },
        {
          name: "Webパフォーマンス",
          level: 4,
          comment:
            "バンドルサイズ最適化やレンダリングパフォーマンス改善の経験あり。",
        },
      ],
      backendSkills: [
        {
          name: "Ruby on Rails",
          level: 5,
          comment: "大規模アプリケーション開発経験あり、内部設計に精通。",
        },
        {
          name: "MySQL",
          level: 4,
          comment:
            "複雑なテーブル設計とクエリ最適化、インデックス設計の知見あり。",
        },
        {
          name: "Redis",
          level: 4,
          comment: "キャッシュ戦略の設計と非同期処理の実装経験豊富。",
        },
        {
          name: "RSpec",
          level: 4,
          comment: "TDDを実践し、効率的なテスト設計と実装が可能。",
        },
      ],
      devOpsSkills: [
        {
          name: "AWS",
          level: 4,
          comment:
            "ECS/RDS/ElastiCacheなどを使ったインフラ設計と運用経験あり。",
        },
        {
          name: "Docker",
          level: 3,
          comment: "開発環境の標準化とCI/CDへの統合経験あり。",
        },
        {
          name: "CircleCI",
          level: 3,
          comment: "継続的インテグレーション環境の構築と運用経験あり。",
        },
      ],
      softSkills: [
        {
          name: "アジャイル開発",
          level: 4,
          comment:
            "スクラムマスターとしての経験もあり、効率的な開発プロセス構築が得意。",
        },
        {
          name: "ドキュメンテーション",
          level: 4,
          comment: "API仕様書やシステム設計書の整備経験豊富。",
        },
      ],
      overallComment:
        "Ruby on Railsを用いたバックエンド開発とReactでのフロントエンド開発の両方に精通しています。プロダクト開発の経験が豊富で、技術選定から設計、実装、運用まで一貫して対応可能です。アジャイル開発にも慣れており、迅速な開発サイクルの実現に貢献できます。",
      matchingScore: 90,
    },
  },
  {
    engineerName: "H.R",
    jobRequirement: {
      title: "AIを活用したモバイルアプリ開発",
      description: "機械学習技術を活用した画像認識アプリケーション",
      requiredSkills: ["React Native", "Python", "TensorFlow"],
      preferredSkills: ["Firebase", "AWS Lambda", "GraphQL"],
    },
    engineerEvaluation: {
      frontendSkills: [
        {
          name: "React Native",
          level: 5,
          comment:
            "複数のアプリを開発・リリースした実績があり、Native Moduleの開発経験も豊富。",
        },
        {
          name: "JavaScript/TypeScript",
          level: 4,
          comment: "型安全な設計とテスト駆動開発の実践経験あり。",
        },
      ],
      backendSkills: [
        {
          name: "Python",
          level: 5,
          comment:
            "機械学習モデルの開発や最適化に長けており、複雑なデータ処理パイプラインの構築経験あり。",
        },
        {
          name: "TensorFlow",
          level: 4,
          comment: "画像認識や自然言語処理モデルの訓練と実装経験が豊富。",
        },
      ],
      devOpsSkills: [
        {
          name: "Firebase",
          level: 4,
          comment:
            "Authentication、Firestore、Cloud Functionsを活用したアプリ開発の経験あり。",
        },
        {
          name: "AWS",
          level: 3,
          comment:
            "Lambda、S3、EC2を用いたサーバーレスアーキテクチャの構築経験。",
        },
      ],
      softSkills: [
        {
          name: "問題解決能力",
          level: 5,
          comment: "複雑な技術課題に対して創造的な解決策を提案できる。",
        },
        {
          name: "学習意欲",
          level: 5,
          comment:
            "最新技術のキャッチアップが早く、継続的に知識を更新している。",
        },
      ],
      overallComment:
        "モバイルアプリケーション開発とAI技術の融合に特化したエンジニア。React Nativeを用いたクロスプラットフォーム開発に精通し、TensorFlowによる機械学習モデルの統合経験が豊富。ユーザー体験を重視しながら、技術的なイノベーションを実現できる貴重な人材。",
      matchingScore: 93,
    },
  },
  {
    engineerName: "M.S",
    jobRequirement: {
      title: "クラウドインフラエンジニア",
      description: "大規模Webサービスのインフラ設計・構築・運用",
      requiredSkills: ["AWS", "Terraform", "Kubernetes"],
      preferredSkills: ["監視ツール", "セキュリティ", "CI/CD", "コスト最適化"],
    },
    engineerEvaluation: {
      frontendSkills: [
        {
          name: "JavaScript",
          level: 2,
          comment: "基本的な知識はあるが、実務経験は限られている。",
        },
      ],
      backendSkills: [
        {
          name: "Python",
          level: 4,
          comment: "自動化スクリプトやツール開発の経験豊富。",
        },
        {
          name: "Go",
          level: 3,
          comment: "マイクロサービス開発の基本的な経験あり。",
        },
      ],
      devOpsSkills: [
        {
          name: "AWS",
          level: 5,
          comment:
            "複数のプロダクション環境の設計から運用まで担当。AWS認定ソリューションアーキテクト保持。",
        },
        {
          name: "Terraform",
          level: 5,
          comment:
            "大規模インフラのIaCを実践。モジュール設計やベストプラクティスに精通。",
        },
        {
          name: "Kubernetes",
          level: 4,
          comment:
            "本番環境での運用経験があり、カスタムコントローラーの開発経験もある。",
        },
        {
          name: "監視/ロギング",
          level: 4,
          comment:
            "Prometheus、Grafana、ELKスタックを用いた監視体制の構築経験豊富。",
        },
      ],
      softSkills: [
        {
          name: "トラブルシューティング",
          level: 5,
          comment: "複雑なシステム障害の原因特定と解決に長けている。",
        },
        {
          name: "ドキュメンテーション",
          level: 4,
          comment: "インフラ構成や運用手順の詳細なドキュメント作成経験あり。",
        },
      ],
      overallComment:
        "クラウドインフラ、特にAWSとKubernetesを用いた大規模システムの設計・構築・運用に精通したエンジニア。Infrastructure as Codeの実践に長け、セキュリティとコスト最適化の両立が得意。障害対応の経験も豊富で、24時間365日の安定運用を実現してきた実績がある。",
      matchingScore: 96,
    },
  },
  {
    engineerName: "T.K",
    jobRequirement: {
      title: "IoTプラットフォーム開発",
      description: "製造業向けIoT連携プラットフォーム",
      requiredSkills: ["Node.js", "MQTT", "AWS IoT", "Time Series DB"],
      preferredSkills: ["React", "Elasticsearch", "CI/CD", "Terraform"],
    },
    engineerEvaluation: {
      frontendSkills: [
        {
          name: "React",
          level: 4,
          comment: "dApp向けのフロントエンド開発経験豊富。",
        },
        {
          name: "TypeScript",
          level: 4,
          comment: "型安全なdApp開発の実践経験あり。",
        },
        {
          name: "Web3.js/ethers.js",
          level: 5,
          comment: "ブロックチェーンとのインタラクションに精通。",
        },
      ],
      backendSkills: [
        {
          name: "Solidity",
          level: 5,
          comment:
            "複雑なスマートコントラクト開発の経験豊富。ガス最適化やセキュリティ対策に精通。",
        },
        {
          name: "Node.js",
          level: 4,
          comment: "オフチェーンサービスの開発経験あり。",
        },
      ],
      devOpsSkills: [
        {
          name: "Hardhat/Truffle",
          level: 4,
          comment: "テスト駆動開発とCI/CD統合の経験あり。",
        },
        {
          name: "IPFS",
          level: 3,
          comment: "分散型ストレージを活用したdApp開発経験あり。",
        },
      ],
      softSkills: [
        {
          name: "セキュリティ意識",
          level: 5,
          comment: "スマートコントラクトの脆弱性に関する深い理解がある。",
        },
        {
          name: "コミュニティ貢献",
          level: 4,
          comment:
            "オープンソースプロジェクトへの貢献やミートアップでの登壇経験あり。",
        },
      ],
      overallComment:
        "ブロックチェーン技術、特にイーサリアムエコシステムに精通したエンジニア。Solidityを用いた安全なスマートコントラクト開発と、Web3.jsを活用したdAppフロントエンド開発の両方に長けている。複数のDeFiプロジェクトの立ち上げに参画した経験があり、トークノミクス設計からセキュリティ監査対応まで幅広い知見を持つ。",
      matchingScore: 95,
    },
  },
  {
    engineerName: "N.O",
    jobRequirement: {
      title: "ブロックチェーン開発エンジニア",
      description: "DeFiプロジェクトのスマートコントラクト開発",
      requiredSkills: ["Solidity", "Web3.js", "React", "TypeScript"],
      preferredSkills: ["DeFi", "Hardhat", "IPFS", "セキュリティ"],
    },
    engineerEvaluation: {
      frontendSkills: [
        {
          name: "React",
          level: 4,
          comment: "dApp向けのフロントエンド開発経験豊富。",
        },
        {
          name: "TypeScript",
          level: 4,
          comment: "型安全なdApp開発の実践経験あり。",
        },
        {
          name: "Web3.js/ethers.js",
          level: 5,
          comment: "ブロックチェーンとのインタラクションに精通。",
        },
      ],
      backendSkills: [
        {
          name: "Solidity",
          level: 5,
          comment:
            "複雑なスマートコントラクト開発の経験豊富。ガス最適化やセキュリティ対策に精通。",
        },
        {
          name: "Node.js",
          level: 4,
          comment: "オフチェーンサービスの開発経験あり。",
        },
      ],
      devOpsSkills: [
        {
          name: "Hardhat/Truffle",
          level: 4,
          comment: "テスト駆動開発とCI/CD統合の経験あり。",
        },
        {
          name: "IPFS",
          level: 3,
          comment: "分散型ストレージを活用したdApp開発経験あり。",
        },
      ],
      softSkills: [
        {
          name: "セキュリティ意識",
          level: 5,
          comment: "スマートコントラクトの脆弱性に関する深い理解がある。",
        },
        {
          name: "コミュニティ貢献",
          level: 4,
          comment:
            "オープンソースプロジェクトへの貢献やミートアップでの登壇経験あり。",
        },
      ],
      overallComment:
        "ブロックチェーン技術、特にイーサリアムエコシステムに精通したエンジニア。Solidityを用いた安全なスマートコントラクト開発と、Web3.jsを活用したdAppフロントエンド開発の両方に長けている。複数のDeFiプロジェクトの立ち上げに参画した経験があり、トークノミクス設計からセキュリティ監査対応まで幅広い知見を持つ。",
      matchingScore: 95,
    },
  },
  {
    engineerName: "J.K",
    jobRequirement: {
      title: "Gameエンジニア",
      description: "モバイルゲーム開発",
      requiredSkills: ["Unity", "C#", "UI/UX設計"],
      preferredSkills: ["AR/VR", "Firebase", "ゲーム物理"],
    },
    engineerEvaluation: {
      frontendSkills: [
        {
          name: "Unity",
          level: 5,
          comment: "ゲーム開発に精通している。",
        },
        {
          name: "C#",
          level: 5,
          comment: "ゲーム開発に精通している。",
        },
        {
          name: "UI/UX設計",
          level: 4,
          comment: "ゲームのユーザーインターフェイスに精通している。",
        },
      ],
      backendSkills: [
        {
          name: "Firebase",
          level: 4,
          comment: "ゲームのバックエンドとしての経験あり。",
        },
      ],
      devOpsSkills: [
        {
          name: "AR/VR",
          level: 4,
          comment: "AR/VR技術を用いたゲーム開発に精通している。",
        },
      ],
      softSkills: [
        {
          name: "ゲーム物理",
          level: 4,
          comment: "ゲームの物理エンジンに精通している。",
        },
      ],
      overallComment:
        "モバイルゲーム開発に特化したエンジニア。UnityとC#を用いたゲーム開発に精通している。ゲームのユーザーインターフェイスと物理エンジンに精通している。",
      matchingScore: 90,
    },
  },
  {
    engineerName: "R.I",
    jobRequirement: {
      title: "データエンジニア",
      description: "データ基盤の構築とETLパイプライン開発",
      requiredSkills: ["Python", "SQL", "Spark", "AWS"],
      preferredSkills: ["Airflow", "Docker", "Snowflake", "Redshift"],
    },
    engineerEvaluation: {
      frontendSkills: [
        {
          name: "データ可視化",
          level: 3,
          comment: "Tableau、Power BIを用いたダッシュボード作成経験あり。",
        },
      ],
      backendSkills: [
        {
          name: "Python",
          level: 4,
          comment: "Pandas、NumPyを用いたデータ処理に精通。",
        },
        {
          name: "SQL",
          level: 5,
          comment: "複雑なクエリの最適化や大規模データの効率的な処理が得意。",
        },
        {
          name: "Spark",
          level: 5,
          comment: "PySpark、Spark SQLを用いた大規模分散処理の実装経験豊富。",
        },
      ],
      devOpsSkills: [
        {
          name: "AWS Data Services",
          level: 4,
          comment:
            "EMR、Glue、Redshiftを用いたデータパイプラインの構築経験あり。",
        },
        {
          name: "Airflow",
          level: 4,
          comment: "複雑なワークフローのオーケストレーション経験豊富。",
        },
        {
          name: "Kafka",
          level: 3,
          comment: "リアルタイムデータ処理パイプラインの構築経験あり。",
        },
      ],
      softSkills: [
        {
          name: "問題解決能力",
          level: 4,
          comment: "大規模データ処理における性能問題の解決経験豊富。",
        },
        {
          name: "プロジェクト管理",
          level: 3,
          comment: "中規模データプロジェクトのリード経験あり。",
        },
      ],
      overallComment:
        "大規模データ処理基盤の設計・構築・運用に特化したエンジニア。特にApache Sparkを用いた分散処理システムの構築に長け、ペタバイト級のデータ処理経験がある。データの収集から変換、蓄積、分析までのEnd-to-Endのパイプライン構築が得意。コスト効率とパフォーマンスのバランスを考慮した設計ができる点が強み。",
      matchingScore: 94,
    },
  },
  {
    engineerName: "A.M",
    jobRequirement: {
      title: "QAエンジニア",
      description: "自動テストフレームワーク開発とCI/CD統合",
      requiredSkills: ["Python", "Selenium", "Jest", "CI/CD"],
      preferredSkills: [
        "API Testing",
        "パフォーマンステスト",
        "セキュリティテスト",
      ],
    },
    engineerEvaluation: {
      frontendSkills: [
        {
          name: "Selenium/Cypress",
          level: 5,
          comment: "複雑なE2Eテストフレームワークの構築経験豊富。",
        },
        {
          name: "アクセシビリティテスト",
          level: 4,
          comment: "WCAG準拠のテスト自動化経験あり。",
        },
      ],
      backendSkills: [
        {
          name: "API自動テスト",
          level: 5,
          comment: "RestAssured、Postmanを用いた包括的なAPIテスト経験あり。",
        },
        {
          name: "JUnit/TestNG",
          level: 4,
          comment: "単体テストと統合テストの自動化経験豊富。",
        },
      ],
      devOpsSkills: [
        {
          name: "CI/CD統合",
          level: 4,
          comment:
            "Jenkins、GitLab CIでのテスト自動化パイプライン構築経験あり。",
        },
        {
          name: "負荷テスト",
          level: 4,
          comment: "JMeter、Gatlingを用いたパフォーマンステスト実施経験豊富。",
        },
        {
          name: "セキュリティテスト",
          level: 3,
          comment: "OWASP ZAPを用いた自動セキュリティスキャン経験あり。",
        },
      ],
      softSkills: [
        {
          name: "コミュニケーション",
          level: 5,
          comment: "開発チームとの効果的なコラボレーションが得意。",
        },
        {
          name: "品質意識",
          level: 5,
          comment: "リスクベースのテスト戦略立案に長けている。",
        },
      ],
      overallComment:
        "金融システムの品質保証に特化したQAエンジニアで、特に自動テスト戦略の立案と実装に長けている。テスト計画から実行、報告までの一連のプロセスを確立し、継続的インテグレーション環境でのテスト自動化に豊富な経験を持つ。セキュリティとパフォーマンスの両面からの品質検証ができ、規制要件を満たすための厳格なテスト手法に精通している。",
      matchingScore: 92,
    },
  },
];

export default skillSheetExamples;
